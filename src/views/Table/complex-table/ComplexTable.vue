<template>
  <div class="complex-table">
    <el-button @click="resetDateFilter">reset date filter</el-button>
    <el-button @click="clearFilter">reset all filters</el-button>
    <el-input v-model="search" size="small" placeholder="Type to search" style="width: 300px" />
    <el-button text type="primary" @click="editRow(null, form)"> Add </el-button>
    <el-checkbox v-model="showReviewer" style="padding: 10px">reviewer</el-checkbox>
    <el-table ref="tableRef" row-key="date" :data="filterTableData" style="width: 100%">
      <el-table-column type="index" label="ID" width="80" sortable/>
      <el-table-column
        prop="date"
        label="Date"
        width="120"
        :filters="filterDate"
        :filter-method="filterHandler"
      />
      <el-table-column prop="title" label="Title" :formatter="formatter">
        <template #default="scope">
          <div @click="editRow(scope.$index, scope.row)">{{ scope.row.title }}</div>
          <el-tag>{{ scope.row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="Author"
        width="100"
        :filters="filterName"
        :filter-method="filterHandler"
      />
      <el-table-column v-if="showReviewer" prop="reviewer" label="Reviewer" width="180" />
      <el-table-column
        prop="imp"
        label="Imp"
        width="180"
        :filters="filterImp"
        :filter-method="filterHandler"
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
      >
        <template #default="scope">
          <el-status
            :type="scope.row.status === 'published' ? '' : 'success'"
            disable-transitions
            >{{ scope.row.status }}</el-status
          >
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button text type="primary" @click="editRow(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button text type="primary" @click="changeStatus(scope.row)" style="width: 60px">
            {{ scope.row.status === 'draft' ? 'published' : 'draft' }}
          </el-button>
          <el-button size="small" type="danger" @click="tableHandleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" :title="popTitle">
      <el-form :model="form">
        <el-form-item label="type: " :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="Please select type">
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
        <el-form-item label="Title: " :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Author: " :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Imp: " :label-width="formLabelWidth">
          <el-rate v-model="form.imp" />
        </el-form-item>
        <el-form-item label="Remark: " :label-width="formLabelWidth">
          <el-input v-model="form.remark" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="saveEditedContent"> Confirm </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import _ from 'lodash'

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
const form = reactive({
  title: '',
  name: '',
  date: '',
  imp: null,
  remark: ''
})

const resetDateFilter = () => {
  tableRef.value.clearFilter(['date'])
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
  } else {
    popup.value = 'editPop'
    popTitle.value = 'edit'
  }
  form.date = row.date
  form.imp = row.imp
  form.type = row.type
  form.title = row.title
  form.name = row.name
  form.remark = row.remark
  editIndex.value = index
  dialogFormVisible.value = true
}
const saveEditedContent = () => {
  if (popup.value === 'addPop') {
    tableData.value.push(form)
  } else {
    tableData.value[editIndex.value].title = form.title
    tableData.value[editIndex.value].name = form.name
    tableData.value[editIndex.value].date = form.date
    tableData.value[editIndex.value].type = form.type
    tableData.value[editIndex.value].imp = form.imp
    tableData.value[editIndex.value].remark = form.remark
  }
  dialogFormVisible.value = false
}

const tableHandleDelete = (index, row) => {
  tableData.value = tableData.value.filter((item) => item !== row)
  console.log(index)
}

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Joe',
    title: 'No. 189, Los Angeles',
    type: 'China',
    status: 'draft',
    imp: '3',
    remark: '',
    reviewer: 'Jack'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    title: 'No. 189, Grove, Los Angeles',
    type: 'USA',
    status: 'published',
    imp: '4',
    remark: '',
    reviewer: 'Larry'
  },
  {
    date: '2016-05-04',
    name: 'marry',
    title: 'No. 189, Grove St, ',
    type: 'EuroZone',
    status: 'draft',
    imp: '1',
    remark: '',
    reviewer: 'Mary'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    title: 'No. 189, Grove St,Angeles',
    type: 'Japan',
    status: 'published',
    imp: '2',
    remark: '',
    reviewer: 'Frank'
  }
])

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

const filterType = _.uniqBy(tableData.value, 'type').map((item) => item.type)
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
.complex-table {
  margin-left: 180px;
}
</style>
