<template>
  <el-table :data="tableData" class="InlineEdit-table">
    <el-table-column type="index" label="ID" width="50" />
    <el-table-column
      v-for="item in tableList"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      align="center"
    >
      <template #default="scope">
        <div v-if="scope.row.editStatus" align="center">
          <el-date-picker
            v-if="`${item.prop}` === 'date'"
            v-model="tableData.date"
            type="datetime"
            placeholder="Select date and time"
            :shortcuts="shortcuts"
            format="YYYY/MM/DD HH:mm"
            value-format="YYYY-MM-DD HH:mm"
          />
          <el-button
            v-else-if="`${item.prop}` === 'status'"
            @click="changeStatus(scope.row)"
            v-model="scope.row[`${item.prop}`]"
            style="width: 70px"
          >
            {{ scope.row.status }}
          </el-button>
          <el-input v-else type="text" v-model="scope.row[`${item.prop}`]" />
        </div>
        <div v-else>{{ scope.row[`${item.prop}`] }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="imp" label="Imp" width="130">
      <template #default="scope">
        <el-rate v-model="scope.row.imp" :colors="colors" />
      </template>
    </el-table-column>
    <el-table-column label="Actions">
      <template #default="scope">
        <el-button text type="primary" @click="editRow(scope.row)">
          {{ scope.row.editStatus === false ? 'Edit' : 'OK' }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref } from 'vue'
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
const tableList = [
  {
    prop: 'date',
    label: 'Date',
    width:160
  },
  {
    prop: 'name',
    label: 'Name',
    width:100
  },
  {
    prop: 'status',
    label: 'Status',
    width:130
  },
  {
    prop: 'title',
    label: 'Title'
  },
  {
    prop: 'reviewer',
    label: 'Reviewer',
    width:100
  }
]
const tableData = ref([
  {
    date: '2023/09/15 06:07',
    name: 'Joe',
    title: 'No. 189, Los Angeles',
    type: 'China',
    status: 'draft',
    editStatus: false,
    imp: '3',
    remark: '',
    reviewer: 'Jack'
  },
  {
    date: '2023-09-08 05:08',
    name: 'Tom',
    title: 'No. 189, Grove, Los Angeles, EuroZone',
    type: 'USA',
    status: 'published',
    editStatus: false,
    imp: '4',
    remark: '',
    reviewer: 'Larry'
  },
  {
    date: '2023-09-28 07:27',
    name: 'marry',
    title: 'No. 189, Grove St, ',
    type: 'EuroZone',
    status: 'draft',
    editStatus: false,
    imp: '1',
    remark: '',
    reviewer: 'Mary'
  },
  {
    date: '2023-09-08 06:21',
    name: 'Tom',
    title: 'No. 189, Grove St,Angeles',
    type: 'Japan',
    status: 'published',
    editStatus: false,
    imp: '2',
    remark: '',
    reviewer: 'Frank'
  }
])
const editRow = (row) => {
  row.editStatus = !row.editStatus
}
const changeStatus = (row) => {
  if (row.status === 'published') {
    row.status = 'draft'
  } else {
    row.status = 'published'
  }
}
</script>
<style scoped></style>
