<template>
  <div class="demo-progress">
    <template v-for="item in customColors" :key="item">
      <div>{{ item.name }}</div>
      <el-progress :percentage="item.percentage" :color="item.color" />
    </template>
    <div>ESLint</div>
    <el-progress :percentage="100" :color="customColorMethod" />
  </div>
</template>

<script lang="ts" setup>
const customColors = [
  { name: 'Vue', color: '#f56c6c', percentage: 70 },
  { name: 'CSS', color: '#e6a23c', percentage: 18 },
  { name: 'JavaScript', color: '#5cb87a', percentage: 12 }
  //   { color: '#1989fa', percentage: 80 },
  //   { color: '#6f7ad3', percentage: 100 }
]

const customColorMethod = (percentage) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
</script>
<style scoped>
.demo-progress .el-progress--line {
  width: 300px;
}
</style>
