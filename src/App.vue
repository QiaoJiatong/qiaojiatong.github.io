<template>
  <div>
    <el-container>
      <SideBar />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import SideBar from '@/components/side-bar.vue'
export default {
  name: 'App',
  components: { SideBar },
  methods: {}
}
</script>
<style scoped></style>
