import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfo = defineStore('userInfo', () => {
  const user = reactive({
    name: '',
    role: ''
  })
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // cookie: name, token => api: getRole => role

  const setUser = (name, role) => {
    user.name = name
    user.role = role
  }

  return { user, setUser }
})
