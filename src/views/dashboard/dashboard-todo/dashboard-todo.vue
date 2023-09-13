<template>
  <fieldset>
    <el-input v-model="newItem" placeholder="Todo List" @keyup.enter="addNewItem" />
    <todo-item
      v-for="(todoItem, index) in todoList"
      :key="todoItem.id"
      :item="todoItem"
      @item-complete="completeItem(index)"
    />
  </fieldset>
</template>
<script>
import todoItem from './todoItem.vue'
export default {
  name: 'dashboardTodo',
  components: { todoItem },
  data() {
    return {
      todoList: [
        {
          content: '给这个存储库加注星标',
          ItemState: true
        }
      ],
      completedList: [],
      newItem:"",
    }
  },
  methods: {
    completeItem(index) {
      this.todoList[index].ItemState = !this.todoList[index].ItemState
    },
    addNewItem() {
      const item = {
        id: Date.now(),
        content: this.newItem,
        time: null,
      };
      this.todoList.push(item);
      this.newItem = "";
    },
  }
}
</script>
<style scoped>
fieldset {
  width: 400px;
  height: 200px;
  margin: 30px;
  border-radius: 10px;
  background-color: rgb(125, 222, 148);
}
legend {
  font-size: 25px;
  font-weight: 350;
  text-align: center;
  background-color: rgb(135, 135, 232);
  padding: 2px;
  border-radius: 5px;
}
</style>
