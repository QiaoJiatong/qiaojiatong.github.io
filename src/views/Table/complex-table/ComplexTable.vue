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
      <el-button type="primary" class="condition-btn" @click="editRow(null, form)"> Add </el-button>
      <el-checkbox v-model="showReviewer" class="condition-btn"> reviewer </el-checkbox>
    </div>
    <el-table
      ref="tableRef"
      row-key="date"
      :data="filterTableData"
      style="width: 100%"
      :border="true"
    >
      <el-table-column type="index" label="ID" width="60" sortable align="center" />
      <el-table-column
        prop="date"
        label="Date"
        width="160"
        :filters="filterDate"
        :filter-method="filterHandler"
        align="center"
      />
      <el-table-column prop="title" label="Title" :formatter="formatter">
        <template #default="scope">
          <div @click="editRow(scope.$index, scope.row)" class="table-titleItem">
            {{ scope.row.title }}
          </div>
          <el-tag>{{ scope.row.nationality }}</el-tag>
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
          <el-rate v-model="scope.row.imp" :colors="colors" style="pointer-events: none" />
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        width="100"
        column-key="status"
        :filters="filterStatus"
        :filter-method="filterHandler"
        filter-placement="bottom-end"
        align="center"
      >
        <template #default="scope">
          <el-button
            :type="scope.row.status === 'published' ? 'primary' : ''"
            disable-transitions
            style="width: 70px"
            >{{ scope.row.status }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="Operations" align="center" width="260">
        <template #default="scope">
          <el-button type="primary" @click="editRow(scope.$index, scope.row)"> Edit </el-button>
          <el-button
            :type="scope.row.status === 'draft' ? 'primary' : ''"
            @click="changeStatus(scope.row)"
            style="width: 70px"
          >
            {{ scope.row.status === 'draft' ? 'published' : 'draft' }}
          </el-button>
          <el-button type="danger" @click.prevent="deleteRow(scope.$index)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" :title="popTitle">
      <el-form :model="form">
        <el-form-item label="nationality: " :label-width="formLabelWidth">
          <el-select v-model="form.nationality" placeholder="Please select nationality">
            <el-option v-for="item in filterType" :key="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="Date:" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.date"
            type="datetime"
            placeholder="Select date and time"
            :shortcuts="shortcuts"
            format="YYYY/MM/DD HH:mm"
            value-format="YYYY-MM-DD HH:mm"
          />
        </el-form-item>
        <el-form-item
          v-for="item in formData"
          :key="item"
          :label="item + ': '"
          :label-width="formLabelWidth"
        >
          <el-rate v-if="item === 'imp'" v-model="form[`${item}`]" :colors="colors" />
          <el-input v-else v-model="form[`${item}`]" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="saveEditedContent"> ConfirmDraft </el-button>
          <el-button type="primary" @click="publishEdit"> Publish </el-button>
        </span>
      </template>
    </el-dialog>
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
import MyPagination from '../../../components/MyPagination.vue'
import { ref, computed, reactive, onMounted } from 'vue'
import _ from 'lodash'
import axios from 'axios'

const search = ref('')
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) => !search.value || data.title.toLowerCase().includes(search.value.toLowerCase())
  )
)

const tableRef = ref()
const showReviewer = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const editIndex = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
const popup = ref('')
const popTitle = ref('')
const formData = ['title', 'name', 'imp', 'reviewer', 'remark']
const pageSize = ref(20)
const currentPage = ref(1)
const form = reactive({
  title: '',
  name: '',
  date: '',
  imp: null,
  remark: '',
  reviewer: '',
  status: ''
})

const total = computed(() => {
  return allTableData.value.length
})

const tableData = computed(() => {
  const startIndex = pageSize.value * (currentPage.value - 1)
  return allTableData.value.slice(startIndex, pageSize.value + startIndex)
})
const pageCount = computed(() => {
  return Math.ceil(total.value / pageSize.value)
})
const sizeChangeHandler = (e) => {
  currentPage.value = 1
  pageSize.value = Number(e)
}
const pageChangeHandler = (page) => {
  if (page < 1 || page > pageCount.value) {
    return
  }
  currentPage.value = page
}
// TODO: improvement typing when refactor table
const clearFilter = () => {
  tableRef.value.clearFilter()
}
const formatter = (row) => {
  return row.title
}

const filterHandler = (value, row, column) => {
  const property = column['property']
  return row[property] === value
}
const editRow = (index, row) => {
  if (index === null) {
    popup.value = 'addPop'
    popTitle.value = 'Add'
    index = tableData.value.length
  } else {
    popup.value = 'editPop'
    popTitle.value = 'edit'
  }
  form.date = row.date
  form.imp = row.imp
  form.nationality = row.nationality
  form.title = row.title
  form.name = row.name
  form.remark = row.remark
  form.status = row.status
  form.reviewer = row.reviewer
  editIndex.value = index
  dialogFormVisible.value = true
}
const saveEditedContent = () => {
  if (popup.value === 'addPop') {
    const newItem = {
      title: '',
      name: '',
      date: '',
      imp: null,
      remark: '',
      reviewer: '',
      status: ''
    }
    tableData.value.push(newItem)
  }
  // todo: 直接 = {...form}
  tableData.value[editIndex.value].title = form.title
  tableData.value[editIndex.value].name = form.name
  tableData.value[editIndex.value].date = form.date
  tableData.value[editIndex.value].nationality = form.nationality
  tableData.value[editIndex.value].imp = form.imp
  tableData.value[editIndex.value].remark = form.remark
  tableData.value[editIndex.value].status = form.status
  tableData.value[editIndex.value].reviewer = form.reviewer
  tableData.value[editIndex.value].status = 'draft'
  dialogFormVisible.value = false
}
const publishEdit = () => {
  saveEditedContent()
  tableData.value[editIndex.value].status = 'published'
}

const deleteRow = (index) => {
  tableData.value.splice(index, 1)
}
const allTableData = ref([])

onMounted(() => {
  axios.get('https://mock.apifox.cn/m1/3403635-0-default/table').then((res) => {
    allTableData.value = [...res.data]
  })
})

const filterName = computed(() => {
  return filterArray(
    tableData.value.map((obj) => {
      return { text: obj.name, value: obj.name }
    }),
    (item) => item.text
  )
})

const filterDate = computed(() =>
  _.uniqBy(tableData.value, 'date').map((item) => ({ text: item.date, value: item.date }))
)
const filterImp = computed(() =>
  _.uniqBy(tableData.value, 'imp').map((item) => ({ text: item.imp, value: item.imp }))
)

const filterType = _.uniqBy(tableData.value, 'nationality').map((item) => item.nationality)
const filterStatus = computed(() => {
  return filterArray(
    tableData.value.map((obj) => {
      return { text: obj.status, value: obj.status }
    }),
    'text'
  )
})
const changeStatus = (row) => {
  if (row.status === 'published') {
    row.status = 'draft'
  } else {
    row.status = 'published'
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
.table-titleItem:hover {
  cursor: pointer;
  color: rgb(234, 44, 44);
  font-style: normal;
  font-family: 'Microsoft YaHei';
}
.table-titleItem {
  color: rgb(50, 76, 220);
  font-style: normal;
  font-family: 'Microsoft YaHei';
}
</style>
