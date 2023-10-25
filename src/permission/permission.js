import Cookie from 'js-Cookie'

function checkPermission(el, binding) {
 
  const hasPermission = () =>{
   return binding.value === Cookie.get('userName')
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
