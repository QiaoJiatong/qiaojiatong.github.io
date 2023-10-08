<template>
  <el-container>
    <SideBar />
    <el-main class="router-view">
      <!-- <myTag /> -->
      <router-view />
    </el-main>
  </el-container>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
// import myTag from './components/myTag.vue';
export default {
  name: 'App',
  components: { SideBar },
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
</style>
