<template>
  <div>
    <el-container>
      <SideBar />
      <el-main>
        <myTag />
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import SideBar from '@/components/side-bar.vue'
import myTag from './components/myTag.vue';
export default {
  name: 'App',
  components: { SideBar , myTag },
  methods: {}
}
</script>
<style scoped></style>
