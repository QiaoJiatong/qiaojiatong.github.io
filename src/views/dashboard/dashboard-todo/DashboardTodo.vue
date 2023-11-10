<template>
  <div class="dashboard-todo">
    <div class="todo-el-input" style="position: relative; width: 100%">
      <el-checkbox
        v-show="selectedDisplay === 'all' && allItems.length"
        class="todo-el-check"
        :model-value="checkAll"
        :indeterminate="isIndeterminate"
        @change="(val) => (checkedItems = val ? [...allItems] : [])"
        style="position: absolute; left: 0"
      />
      <el-input
        v-model="newItem"
        placeholder="Todo List"
        @keyup.enter="addNewItem"
        style="margin-left: 50px"
      />
    </div>

    <el-checkbox-group v-model="checkedItems" class="todo-el-group">
      <div v-for="item in displayedItems" :key="item" class="todo-item">
        <el-checkbox class="todo-el-check" :label="item">{{ item }}</el-checkbox>
        <button class="todo-list__delete-button" @click="dashboardTodoDelete(item)">x</button>
      </div>
    </el-checkbox-group>
    <div class="dashboard-todo-button">
      <div style="font-size: 12px; margin-right: 25px">{{ activeItems.length }} Items left</div>
      <el-button
        v-for="btn in statusBtns"
        :key="btn"
        text
        :type="selectedDisplay === btn ? 'primary' : ''"
        size="small"
        :bg="selectedDisplay === btn"
        @click="selectedDisplay = btn"
        >{{ btn }}</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// import axios from 'axios'

const allItems = ref([
  '购物',
  '健身',
  '学习',
  '工作',
  '旅行',
  '阅读',
  '家务',
  '会议',
  '电影',
  '瑜伽',
  '游戏',
  '写作',
  '绘画',
  '音乐',
  '社交',
  '烹饪',
  '散步',
  '跑步',
  '看剧',
  '休息',
  '沐浴',
  '写邮件',
  '买菜',
  '理发',
  '做饭',
  '清洁',
  '看新闻',
  '摄影',
  '编程'
])
// onMounted(() => {
//   axios.get('https://6504881cc8869921ae252701.mockapi.io/todoList').then((res) => {
//     allItems.value = res.data.map((d) => d.text)
//     console.log(allItems.value);
//     checkedItems.value = []
//   })
// })

const checkedItems = ref([
  '工作',
  '旅行',
  '阅读',
  '家务',
  '散步',
  '跑步',
  '看剧',
  '休息',
  '沐浴',
  '写邮件'
])

const statusBtns = ['all', 'active', 'completed']
const selectedDisplay = ref('all')

const activeItems = computed(() => {
  return allItems.value.filter((item) => !checkedItems.value.includes(item))
})

const displayedItems = computed(() => {
  if (selectedDisplay.value === 'all') {
    return allItems.value
  }
  if (selectedDisplay.value === 'active') {
    return activeItems.value
  }
  return checkedItems.value
})

const newItem = ref('')

const addNewItem = () => {
  if (!!newItem.value.trim() === false) {
    return
  } else {
    allItems.value.push(newItem.value)
    newItem.value = ''
  }
}

const isIndeterminate = computed(
  () => checkedItems.value.length > 0 && checkedItems.value.length < allItems.value.length
)

const checkAll = computed(
  () => checkedItems.value.length === allItems.value.length && allItems.value.length > 0
)

const dashboardTodoDelete = (deletedItem) => {
  allItems.value = allItems.value.filter((item) => item != deletedItem)
  checkedItems.value = checkedItems.value.filter((item) => item != deletedItem)
}
</script>
<style scoped>
.dashboard-todo {
  max-height: 500px;
  width: 25%;
  margin-top: 30px;
  margin-left: 10px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
}

.todo-el-group {
  height: 320px;
  overflow: auto;
}

.todo-item {
  display: flex;
  justify-content: space-between;
}

.todo-el-check {
  margin-left: 10px;
  padding: 10px;
}

.todo-item:hover .todo-list__delete-button {
  display: block;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: rgb(150, 107, 107);
  border: 0;
  background-color: rgb(255, 255, 255);
}

.todo-list__delete-button:hover .todo-list__delete-button {
  display: block;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: rgb(233, 19, 19);
  border: 0;
  background-color: rgb(255, 255, 255);
}
.todo-list__delete-button {
  display: none;
}

.dashboard-todo-button {
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}

.todo-el-input {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.todo-item :deep(.is-checked .el-checkbox__label) {
  color: gray;
}
</style>
