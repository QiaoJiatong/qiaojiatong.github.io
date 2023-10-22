<template>
  <div class="login-page">
    <h1>Login Form</h1>
    <el-form>
      <el-form-item label="用户：">
        <el-input v-model="store.userName" placeholder="name" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="passwordInput" type="password" placeholder="password" show-password />
      </el-form-item>
    </el-form>
    <!-- <p>{{ $counter.useCounterStore.routerTokens }}</p> -->
    <el-button type="primary" @click="toLogin">Login</el-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import Cookie from 'js-cookie'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

const passwordInput = ref('')

const router = useRouter()

const toLogin = () => {
  axios
    .post('https://mock.apifox.cn/m1/3403635-0-default/login', {
      userName: store.userName,
      password: passwordInput.value
    })
    .then((res) => {
      if (res.data.success) {
        Cookie.set('token', res.data.token)
        router.push('/dashboard')
      } else {
        ElMessage({
          message: res.data.errorMessage,
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
