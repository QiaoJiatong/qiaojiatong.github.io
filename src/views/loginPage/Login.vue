<template>
  <el-popover :visible="visible" placement="top" :width="100">
    <div style="text-align: center">
      <el-button text @click="$router.push('/dashboard')"> 首页 </el-button>
      <el-button text @click="loginOut">退出登录</el-button>
    </div>
    <template #reference>
      <span class="login-link">
        <div @click="visible = true" class="login-page-gif"></div>
      </span>
    </template>
  </el-popover>
</template>
<script>
import Cookie from 'js-cookie'
export default {
  name: 'Login',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    loginOut() {
      Cookie.remove('token')
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.login-link {
  display: flex;
  right: 20px;
  position: absolute;
  width: 30px;
  height: 30px;
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
  width: 30px;
  height: 30px;
}
.el-button.is-text {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
