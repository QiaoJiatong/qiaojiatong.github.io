import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

function checkPermission(el, binding) {
 
  const hasPermission = () =>{
   return binding.value === store.userName
  } 
  if (!hasPermission) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  update(el, binding) {
    checkPermission(el, binding)
  }
}
