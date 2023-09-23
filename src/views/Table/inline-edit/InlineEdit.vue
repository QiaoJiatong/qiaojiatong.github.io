<template>
  <el-table :data="tableData" class="InlineEdit-table">
    <el-table-column type="index" label="ID" width="50" />
    <el-table-column prop="date" label="Date" width="100" />
    <el-table-column prop="name" label="Name" width="100" />
    <el-table-column prop="imp" label="Imp" width="180">
      <template #default="scope">
        <el-rate v-model="scope.row.imp" :colors="colors" style="pointer-events: none" />
      </template>
    </el-table-column>
    <el-table-column prop="status" label="Status" />
    <el-table-column prop="title" label="Title">
      <template #default="scope">
        <div v-if="scope.row.editStatus" style="display: flex">
          <el-input type="text" v-model="scope.row.title" />
          <el-button text type="danger" @click="scope.row.editStatus = false"> cancel </el-button>
        </div>
        <div v-else>{{ scope.row.title }}</div>
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
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Joe',
    title: 'No. 189, Los Angeles',
    editStatus: false,
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
    editStatus: false,
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
    editStatus: false,
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
    editStatus: false,
    type: 'Japan',
    status: 'published',
    imp: '2',
    remark: '',
    reviewer: 'Frank'
  }
])
const editRow = (row) => {
  row.editStatus = !row.editStatus
}
</script>
<style scoped></style>
