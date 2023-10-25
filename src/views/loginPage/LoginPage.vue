<template>
  <div class="login-page">
    <h1>欢迎登录</h1>
    <el-form>
      <el-form-item label="用户：">
        <el-input v-model="userNameInput" placeholder="name" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="passwordInput" type="password" placeholder="password" show-password />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="toLogin">Login</el-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import Cookie from 'js-Cookie'


const userNameInput = ref('')
const passwordInput = ref('')

const router = useRouter()

const toLogin = () => {
  axios
    .post('https://mock.apifox.cn/m1/3403635-0-default/login', {
      userName: userNameInput.value,
      password: passwordInput.value
    })
    .then((res) => {
      const { data } = res
      if (res.data.success) {
        console.log(data)
        Cookie.set('token', data.token)
        Cookie.set('userName', userNameInput.value)
        router.push('/dashboard')
      } else {
        ElMessage({
          message: data.errorMessage,
          type: 'warning'
        })
      }
    })
}
</script>
<style scoped>
h1 {
  color: rgb(72, 200, 132);
  margin-top: 200px;
}
.login-page {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgb(217, 231, 233);
  height: 100%;
}
.el-input {
  width: 300px;
}
.el-button {
  width: 100px;
}
</style>
