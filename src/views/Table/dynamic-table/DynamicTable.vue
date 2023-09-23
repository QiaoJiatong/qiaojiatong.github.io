<template>
  <div>
    <el-checkbox v-model="showDate" style="padding: 10px"> Date </el-checkbox>
    <el-checkbox v-model="showName" style="padding: 10px"> Name </el-checkbox>
    <el-checkbox v-model="showContent" style="padding: 10px"> Address </el-checkbox>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="writings" label="Writings" width="180" />
    <el-table-column v-if="showDate" prop="date" label="Date" width="180" />
    <el-table-column v-if="showName" prop="name" label="Name" width="180" />
    <el-table-column v-if="showContent" prop="content" label="Content" width="320"/>
  </el-table>
</template>

<script setup>
import { ref } from 'vue'
const showContent = ref(false)
const showName = ref(true)
const showDate = ref(false)
const tableData = [
  {
    writings:'writing1',
    date: '2016-05-03',
    name: '李煜',
    content: '离恨恰如春草，更行更远还生',
  },
  {
    writings:'writing2',
    date: '2016-05-02',
    name: '李煜',
    content: '帘外雨潺潺，春意阑珊',
  },
  {
    writings:'writing3',
    date: '2016-05-04',
    name: '李煜',
    content: '无言独上西楼，月如钩',
  },
  {
    writings:'writing4',
    date: '2016-05-01',
    name: '李煜',
    content: '问君能有几多愁？恰似一江春水向东流',
  },
]
</script>
