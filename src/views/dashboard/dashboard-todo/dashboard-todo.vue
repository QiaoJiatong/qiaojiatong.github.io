<template>
  <fieldset>
    <el-input v-model="newItem" placeholder="Todo List" @keyup.enter="addNewItem" />
    <template v-for="(todoItem, index) in newTodoList" :key="todoItem.id">
      <todo-item
        :item="todoItem"
        @item-complete="completeItem(index)"
        @todoItem-delete="dashboardTodoDelete(index)"
      />
    </template>
    <div class="dashboard-todo-button">
      <div>{{ ActiveTodo.length }}Items left</div>
      <button @click="showAllTodo">All</button>
      <button @click="showActiveTodo">Active</button>
      <button @click="showCompletedTodo">Completed</button>
    </div>
  </fieldset>
</template>
<script>
import todoItem from './todoItem.vue'
export default {
  name: 'DashboardTodo',
  components: { todoItem },
  data() {
    return {
      todoList: [
        {
          content: '给这个存储库加注星标',
          ItemState: false
        },
        {
          content: '分叉这个储存库',
          ItemState: false
        },
        {
          content: '关注作者',
          ItemState: false
        },
        {
          content: 'vue-元素-管理',
          ItemState: false
        }
      ],
      newItem: '',
      newTodoList: []
    }
  },
  computed: {
    ActiveTodo() {
      return this.todoList.filter((todo) => !todo.ItemState)
    },
    CompletedTodo() {
      return this.todoList.filter((todo) => todo.ItemState)
    }
  },
  methods: {
    completeItem(index) {
      this.newTodoList[index].ItemState = !this.newTodoList[index].ItemState
    },
    addNewItem() {
      const item = {
        content: this.newItem,
        ItemState: false
      }
      this.todoList.push(item)
      this.newTodoList.push(item)
      this.newItem = ''
    },
    dashboardTodoDelete(index) {
      this.todoList.splice(index, 1)
      this.showAllTodo()
    },
    showAllTodo() {
      this.newTodoList = [...this.todoList]
    },
    showActiveTodo() {
      this.newTodoList = [...this.ActiveTodo]
    },
    showCompletedTodo() {
      this.newTodoList = [...this.CompletedTodo]
    }
  },
  created() {
    this.showAllTodo()
  }
}
</script>
<style scoped>
fieldset {
  width: 400px;
  height: 100%;
  margin: 30px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}
legend {
  font-size: 25px;
  font-weight: 350;
  text-align: center;
  background-color: rgb(135, 135, 232);
  padding: 2px;
  border-radius: 5px;
}
button {
  border: 0;
  background-color: rgb(255, 255, 255);
  margin: 10px;
}
.dashboard-todo-button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
