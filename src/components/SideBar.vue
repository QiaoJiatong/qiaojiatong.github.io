<template>
  <el-aside width="200px">
    <el-scrollbar>
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :default-active="$route.name"
        :@open="handleOpen($route.name)"
      >
        <template v-for="route in routes" :key="route.name">
          <el-sub-menu v-if="route.children" :index="route.name">
            <template #title>
              <icon-font v-if="route.meta && route.meta.icon" :icon-name="route.meta.icon" />
              <span>{{ route.name }}</span>
            </template>
            <el-menu-item
              v-for="child in route.children"
              :key="child.name"
              :index="child.name"
              :item="child"
              @click="clickMenuItem(child.path)"
            >
              <icon-font v-if="child.meta && child.meta.icon" :icon-name="child.meta.icon" />
              {{ child.name }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else @click="clickMenuItem(route.path)" :index="route.name">
            <icon-font v-if="route.meta && route.meta.icon" :icon-name="route.meta.icon" />
            <span>{{ route.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import routes from '../router/route'
export default {
  name: 'SideBar',
  data() {
    return {
      routes: routes,
      isCollapse: false
    }
  },
  methods: {
    handleOpen(route) {
      if (!route) return;
      document.title = route
    },
    clickMenuItem(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.el-aside {
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
