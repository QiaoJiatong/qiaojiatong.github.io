<template>
  <el-container v-if="needSideBar">
    <SideBar />
    <el-main class="router-view">
      <el-header>
        <BreadcrumbBar />
        <Login />
        <tab-bar />
      </el-header>
      <router-view />
    </el-main>
  </el-container>
  <router-view v-else />
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import BreadcrumbBar from '@/components/BreadcrumbBar.vue'
import TabBar from '@/components/TabBar.vue'
import Login from './views/loginPage/Login.vue'
export default {
  name: 'App',
  components: { SideBar, BreadcrumbBar, TabBar, Login },
  computed: {
    needSideBar() {
      return this.$route.path !== '/login'
    }
  }
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
  padding: 0 10px;
  height: min-content;
  position: relative;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
}
</style>
