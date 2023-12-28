function cloneDeep(item) {
  if (item === null) return null
  if (typeof item !== 'object') return item
  if (item.constructor === Date) return new Date(item)
  if (item.constructor === RegExp) return new RegExp(item)
  var newItem = new item.constructor()
  for (var key in item) {
    if (Object.prototype.hasOwnProperty.call(item, key)) {
      var val = item[key]
      newItem[key] = typeof val === 'object' ? arguments.callee(val) : val
    }
  }
  return newItem
}

// 'aa'
// 100
// null
// undefined
// [1, 2]
// [a, {b: 1, c: [1, 2]}]

// 测试深拷贝一个简单的对象
const originalObject = { a: 1, b: 2, c: { d: 3, e: 4 } }
const copiedObject = cloneDeep(originalObject)
console.log(copiedObject) // 输出一个与原对象相同但不同的对象

// 确保修改复制后的对象不会影响原对象
copiedObject.a = 100
copiedObject.c.d = 300
console.log(originalObject) // 原对象应该保持不变

// 测试深拷贝一个包含数组的对象
const originalArray = ['a', {b: 1, c: [1, 2]}]
const copiedArray = cloneDeep(originalArray)
console.log(copiedArray) // 输出一个与原数组相同但不同的数组

// 确保修改复制后的数组不会影响原数组
copiedArray[1].c[0] = 500
console.log(originalArray) // 原数组应该保持不变
console.log(copiedArray)


