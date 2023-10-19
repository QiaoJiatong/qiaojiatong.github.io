<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }"> 首页 </el-breadcrumb-item>
    <template v-if="$route.name !== '首页'">
      <el-breadcrumb-item
        v-for="match in $route.matched"
        :key="match.path"
        :to="{ path: match.path }"
      >
        {{ match.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'BreadcrumbBar'
}
</script>
<style scoped>
.el-breadcrumb {
  height: 30px;
  display: flex;
  align-items: center;
}
</style>
