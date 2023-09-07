<template>
  <el-aside width="200px">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="/dashboard"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        v-for="route in routes"
        :key="route.name"
        :index="route.path"
        @click="clickMenuItem(route.path)"
      >
        <el-icon><Icon-Menu /></el-icon>
        <span>{{ route.name }}</span>
      </el-menu-item>
      <!-- <el-menu-item index="/documentation" @click="clickMenuItem('/documentation')">
        <el-icon><Document /></el-icon>
        <span>documentation</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1" @click="clickMenuItem('/documentation/home')"
            >item one</el-menu-item
          >
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item> -->
    </el-menu>
  </el-aside>
</template>

<script>
import routes from '../router/route'
import { Menu as IconMenu } from '@element-plus/icons-vue'
export default {
  name: 'SideBar',
  components: { IconMenu },
  data() {
    return {
      routes: routes
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log('open: ', key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log('close: ', key, keyPath)
    },
    clickMenuItem(route) {
      this.$router.push(route)
    }
  }
}
</script>
