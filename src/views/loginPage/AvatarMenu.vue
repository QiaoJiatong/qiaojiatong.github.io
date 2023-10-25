<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-popover placement="bottom" :width="100" trigger="click" popper-class="avatar-menu_popover">
    <div style="text-align: center">
      <el-button text @click="toDashboard">首页</el-button>
      <el-button text @click="logout">退出登录</el-button>
    </div>
    <template #reference>
      <span class="login-link">
        <div class="login-page-gif"></div>
      </span>
    </template>
  </el-popover>
</template>
<script>
import Cookie from 'js-Cookie'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'AvatarMenu',
  data() {
    return {
      // visible: false
    }
  },
  methods: {
    logout() {
      Cookie.remove('token')
      this.$router.push('/login')
    },
    toDashboard() {
      this.$router.push('/')
      this.visible = false
    }
  }
}
</script>
<style scoped>
.login-link {
  display: flex;
  right: 25px;
  position: absolute;
  width: 40px;
  height: 40px;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-content: flex-end;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
}
.login-page-gif {
  background-image: url('/dashboardCard.gif');
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.el-button.is-text {
  margin-left: 10px;
  margin-right: 10px;
}
</style>

<style>
.el-popover.el-popper.avatar-menu_popover {
  min-width: 100px;
}
</style>
