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
      <template v-for="route in routes" :key="route.name">
        <el-sub-menu v-if="route.children" :index="route.path">
          <template #title>
            <icon-font v-if="route.meta && route.meta.icon" :icon-name="route.meta.icon" />
            <span>{{ route.name }}</span>
          </template>
          <el-menu-item
            v-for="child in route.children"
            :key="child.name"
            :index="child.path"
            :item="child"
            @click="clickMenuItem(child.path)"
          >
            <icon-font v-if="child.meta && child.meta.icon" :icon-name="child.meta.icon" />
            {{ child.name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else @click="clickMenuItem(route.path)" :index="route.path">
          <icon-font v-if="route.meta && route.meta.icon" :icon-name="route.meta.icon" />
          <span>{{ route.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import routes from '../router/route'
export default {
  name: 'SideBar',
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

<style scoped>
.el-aside {
  height: 100vh;
}

.el-menu {
  min-height: 100%;
}

.el-menu-item .icon-font,
.el-sub-menu__title .icon-font {
  margin-right: 5px;
  width: var(--el-menu-icon-width);
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>
