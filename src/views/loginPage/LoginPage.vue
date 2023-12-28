<template>
  <div class="login-page">
    <h1>欢迎登录</h1>
    <el-form ref="elFormRef" :model="form" :rules="rules">
      <el-form-item label="用户：" prop="userName">
        <el-input v-model="form.userName" placeholder="name" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="form.password" type="password" placeholder="password" show-password />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="toLogin">登 录</el-button>
    <div class="available-account">
      <span>账号: joe 密码: 123456</span>
      <span>账号: admin 密码: admin</span>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import Cookie from 'js-cookie'

const elFormRef = ref()

const form = reactive({
  userName: '',
  password: ''
})

const router = useRouter()

const rules = reactive({
  userName: { required: true, message: 'Please input user name', trigger: 'blur' },
  password: { required: true, message: 'Please input password' }
})

const toLogin = async () => {
  if (!elFormRef.value) {
    return
  }

  elFormRef.value.validate((valid) => {
    if (!valid) return
    axios
      .post('https://mock.apifox.cn/m1/3403635-0-default/login', {
        userName: form.userName,
        password: form.password
      })
      .then((res) => {
        const { data } = res
        if (res.data.success) {
          console.log(data)
          Cookie.set('token', data.token)
          Cookie.set('userName', form.userName)
          router.push('/dashboard')
        } else {
          ElMessage({
            message: data.errorMessage,
            type: 'warning'
          })
        }
      })
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
  background-color: #2d3a4b;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
}
.el-input {
  width: 300px;
}
.el-button {
  width: 100px;
}

.available-account {
  display: flex;
  flex-direction: column;
}

span {
  width: 240px;
  padding: 5px;
  color: red;
}
</style>
