<template>
  <div>
    <div style="height: 35px; margin-bottom: 10px">
      <el-button type="primary" @click="clearFilter" class="condition-btn"
        >reset all filters</el-button
      >
      <el-input
        v-model="search"
        type="text"
        placeholder="Type to search"
        class="condition-btn"
        style="width: 300px"
      />
      <el-button type="primary" class="condition-btn" @click="add"> Add </el-button>
      <el-checkbox v-model="showReviewer" class="condition-btn"> reviewer </el-checkbox>
    </div>

    <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%" :border="true">
      <el-table-column type="index" label="ID" width="60" sortable align="center" />
      <el-table-column
        prop="date"
        label="Date"
        width="100"
        :filters="filterDate"
        :filter-method="filterHandler"
        align="center"
      />
      <el-table-column prop="title" label="Title" :formatter="formatter">
        <template #default="scope">
          <div @click="editRow(scope.$index, scope.row)" class="table-title-item">
            {{ scope.row.title }}
            <el-tag>{{ scope.row.nationality }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Author"
        width="100"
        :filters="filterName"
        :filter-method="filterHandler"
        align="center"
      />
      <el-table-column
        v-if="showReviewer"
        prop="reviewer"
        label="Reviewer"
        width="100"
        align="center"
      />
      <el-table-column
        prop="imp"
        label="Imp"
        width="130"
        :filters="filterImp"
        :filter-method="filterHandler"
        align="center"
      >
        <template #default="scope">
          <el-rate v-model="scope.row.imp" :max="3" :colors="colors" style="pointer-events: none" />
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        width="100"
        column-key="status"
        :filters="filterStatus"
        :filter-method="filterHandler"
        filter-placement="bottom"
        :filter-multiple="false"
        align="center"
      >
        <template #default="scope">
          <el-tag
            :type="scope.row.status === PUBLISH_STATUS.published ? 'success' : ''"
            disabled
            style="width: 70px"
            >{{ scope.row.status }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="Operations" align="center" width="260">
        <template #default="scope">
          <el-button type="primary" @click="editRow(scope.row)"> 编辑 </el-button>
          <el-tag
            :type="scope.row.status === PUBLISH_STATUS.draft ? 'success' : ''"
            @click="changeStatus(scope.row)"
            style="width: 70px"
          >
            {{ scope.row.status === PUBLISH_STATUS.draft ? '发布' : '草稿' }}
          </el-tag>
          <el-button type="danger" @click="deleteRow(scope.row)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>

    <DialogForm
      :visible="dialogFormVisible"
      :initForm="initForm"
      :popTitle="popTitle"
      :filterNationality="filterNationality"
      @save="saveEditedContent"
      @cancel="dialogFormVisible = false"
    />
    <my-pagination
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @size-change="sizeChangeHandler"
      @current-change="pageChangeHandler"
    />
  </div>
</template>

<script setup>
import MyPagination from '@/components/MyPagination.vue'
import { ref, computed, reactive, onMounted } from 'vue'
import _ from 'lodash'
import axios from 'axios'
import Cookies from 'js-cookie'
import usePagination from './usePagination'
import DialogForm from './DialogForm.vue'
import { PUBLISH_STATUS } from './constants'

const colors = ['#99A9BF', '#F7BA2A', '#FF9900']

const tableRef = ref()
const allTableData= ref([])
const search = ref('')
const filterTableData = computed(() =>
  allTableData.value.filter(
    (data) => !search.value || data.title.toLowerCase().includes(search.value.toLowerCase())
  )
)
const showReviewer = ref(false)

const { pageSize, currentPage, total, sizeChangeHandler, pageChangeHandler } =
  usePagination(filterTableData)

//编辑窗口
const dialogFormVisible = ref(false)
const editingRow = ref(null)
const isAdd = ref(true)
const initForm = reactive({})

const popTitle = computed(() => (isAdd.value ? '新增' : '编辑'))

const edit = (row) => {
  Object.keys(row).forEach((key) => {
    initForm[key] = row[key]
  })
  dialogFormVisible.value = true
}

const editRow = (row) => {
  edit(row)
  editingRow.value = row
  isAdd.value = false
}

const add = () => {
  const newRow = {
    date: getCurrentDate(),
    imp: 1,
    name: Cookies.get('userName'),
    nationality: 'China',
    remark: '',
    reviewer: '',
    status: PUBLISH_STATUS.draft,
    title: ''
  }
  edit(newRow)
  isAdd.value = true
}
const saveEditedContent = (form, status = PUBLISH_STATUS.draft) => {
  dialogFormVisible.value = false
  const newRow = { ...form, status }
  if (isAdd.value) {
    allTableData.value.unshift(newRow)
    return
  }
  const editingIndex = allTableData.value.findIndex((row) => row === editingRow.value)
  allTableData.value[editingIndex] = newRow
}

//分页
const tableData = computed(() => {
  const startIndex = pageSize.value * (currentPage.value - 1)
  return filterTableData.value.slice(startIndex, pageSize.value + startIndex)
})

const clearFilter = () => {
  tableRef.value.clearFilter()
}
const formatter = (row) => {
  return row.title
}

const filterHandler = (value, row, column) => {
  console.log(column)
  const property = column['property']
  return row[property] === value
}

const deleteRow = (row) => {
  const index = allTableData.value.findIndex((item) => item === row)
  allTableData.value.splice(index, 1)
}

onMounted(() => {
  axios.get('https://mock.apifox.cn/m1/3403635-0-default/table').then((res) => {
    allTableData.value = [...res.data]
  })
})

const filterName = computed(() => {
  return filterArray(
    filterTableData.value.map((obj) => {
      return { text: obj.name, value: obj.name }
    }),
    (item) => item.text
  )
})
const getCurrentDate = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const day = String(currentDate.getDate()).padStart(2, '0')
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}

const filterDate = computed(() =>
  _.uniqBy(tableData.value, 'date').map((item) => ({ text: item.date, value: item.date }))
)

const filterImp = [
  { text: 1, value: 1 },
  { text: 2, value: 2 },
  { text: 3, value: 3 }
]

const filterNationality = computed(() =>
  _.uniqBy(allTableData.value, 'nationality').map((item) => item.nationality)
)
const filterStatus = computed(() => {
  return filterArray(
    tableData.value.map((obj) => {
      return { text: obj.status, value: obj.status }
    }),
    'text'
  )
})
const changeStatus = (row) => {
  if (row.status === PUBLISH_STATUS.published) {
    row.status = PUBLISH_STATUS.draft
  } else {
    row.status = PUBLISH_STATUS.published
  }
}

const filterArray = (arr, param) => {
  let fn = (item) => item
  if (typeof param === 'string') {
    fn = (item) => item[param]
  } else if (typeof param === 'function') {
    fn = param
  }
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    let isFind = false
    for (let j = 0; j < newArr.length; j++) {
      if (fn(arr[i]) === fn(newArr[j])) {
        isFind = true
        break
      }
    }
    if (!isFind) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
</script>
<style scoped>
.condition-btn {
  height: 100%;
  margin: 5px;
}
.table-title-item:hover {
  cursor: pointer;
  color: rgb(234, 44, 44);
  font-style: normal;
  font-family: 'Microsoft YaHei';
}
.table-title-item {
  color: rgb(50, 76, 220);
  font-style: normal;
  font-family: 'Microsoft YaHei';
}
.el-tag {
  margin: 5px;
}
</style>
