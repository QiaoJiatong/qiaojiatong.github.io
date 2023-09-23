<template>
  <div>
    <el-container>
      <SideBar />
      <el-main class="router-view">
        <!-- <myTag /> -->
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import SideBar from '@/components/side-bar.vue'
// import myTag from './components/myTag.vue';
export default {
  name: 'App',
  components: { SideBar },
  methods: {}
}
</script>
<style scoped>
.router-view {
  margin-left: 180px;
}
</style>
