<template>
  <span>Fixed header, sorted by header order,</span>
  <div>
    <el-checkbox
      v-for="item in tableList"
      :key="item"
      v-model="item.isShow"
      :flexible="true"
    >
      {{ item.label }}
    </el-checkbox>
  </div>
  <el-table :data="tableData" :border="true">
    <template v-for="item in tableList" :key="item">
      <el-table-column v-if="item.isShow" :prop="item.label" :label="item.label" />
    </template>
  </el-table> 
  <span>Not fixed header, sorted by click order</span>
  <div>
    <el-checkbox
      v-for="item in tableList"
      :key="item"
      :checked="item.isShow"
      @click="showList(item)"
    >
      {{ item.label }}
    </el-checkbox>
  </div>
  <el-table :data="tableData" :border="true">
    <el-table-column
      v-for="item in NotFixedList"
      :key="item"
      :prop="item"
      :label="item"
    />
  </el-table>
</template>

<script setup>
import { ref } from 'vue'
const tableList = ref([
  { label: 'writing', isShow: false },
  { label: 'date', isShow: true },
  { label: 'name', isShow: true },
  { label: 'content', isShow: false }
])
const NotFixedList = ref(['date', 'name'])
const tableData = [
  {
    writing: '清平乐·别来春半',
    date: '2016-05-03',
    name: '李煜',
    content: '离恨恰如春草，更行更远还生'
  },
  {
    writing: '浪淘沙令',
    date: '2016-05-02',
    name: '李煜',
    content: '帘外雨潺潺，春意阑珊'
  },
  {
    writing: '相见欢',
    date: '2016-05-04',
    name: '李煜',
    content: '无言独上西楼，月如钩'
  },
  {
    writing: '虞美人',
    date: '2016-05-01',
    name: '李煜',
    content: '问君能有几多愁？恰似一江春水向东流'
  }
]
const showList = (item) => {
  if (NotFixedList.value.includes(item.label)) {
    NotFixedList.value = NotFixedList.value.filter((list) => list !== item.label)
  } else {
    NotFixedList.value.push(item.label)
  }
}
</script>
<style scoped>
  div{
    margin-bottom: 15px;
  }
</style>

