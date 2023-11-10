import Cookie from 'js-cookie'
import { useRouter } from 'vue-router'

function checkPermission(el, binding) {
  const router = useRouter()
  const hasPermission = () => {
    return binding.value === Cookie.get('userName')
  }
  if (!hasPermission()) {
    // el.parentNode && el.parentNode.removeChild(el)
    router.push('401')
  }
}

export default {
  mounted(el, binding) {
    // const router = useRouter()
    const hasPermission = () => {
      return binding.value === Cookie.get('userName')
    }
    if (!hasPermission()) {
      // el.parentNode && el.parentNode.removeChild(el)
      window.location.hash = '#/401'
    }
  },
  // update(el, binding) {
  //   checkPermission(el, binding)
  // }
}
