<template>
  <el-container>
    <SideBar />
    <el-main class="router-view">
      <el-header>
        <BreadcrumbBar />
        <tab-bar />
      </el-header>
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import BreadcrumbBar from './components/BreadcrumbBar.vue'
import TabBar from './components/TabBar.vue'
export default {
  name: 'App',
  components: { SideBar, BreadcrumbBar, TabBar },
  methods: {}
}
</script>
<style scoped>
.el-container {
  height: 100%;
}

.el-main {
  padding: 0;
}
.router-view {
  margin-left: 200px;
}
.el-header {
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
}
</style>
