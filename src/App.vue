<template>
  <el-container v-if="needSideBar">
    <SideBar />
    <el-main class="router-view">
      <el-header>
        <BreadcrumbBar />
        <AvatarMenu />
      </el-header>
      <div class="tab-bar-container">
        <TabBar />
      </div>
      <router-view />
    </el-main>
  </el-container>
  <router-view v-else />
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import BreadcrumbBar from '@/components/BreadcrumbBar.vue'
import TabBar from '@/components/TabBar.vue'
import AvatarMenu from './views/loginPage/AvatarMenu.vue'
export default {
  name: 'App',
  components: { SideBar, BreadcrumbBar, TabBar, AvatarMenu },
  computed: {
    needSideBar() {
      return !this.$route.meta.singlePage
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 50px;
}
.tab-bar-container {
  border-bottom: 1px solid #d8dce5;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
}
</style>
