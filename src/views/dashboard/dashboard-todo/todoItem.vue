<template>
  <div class="todo-item">
    <input
      @click="todoClickHandler"
      class="box"
      type="checkbox"
      :id="item.id"
      :checked="item.ItemState"
    />
    <label :for="item.id" v-if="item.ItemState" class="todo-label">{{ item.content }}</label>
    <label :for="item.id" v-else>{{ item.content }}</label>
    <button class="dashboard-todo-button" @click="dashboardTodoDelete">x</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object
  },
  emits: ['item-complete', 'todoItem-delete'],
  methods: {
    todoClickHandler() {
      this.$emit('item-complete')
    },
    dashboardTodoDelete() {
      this.$emit('todoItem-delete')
    }
  }
}
</script>

<style scoped>
input {
  text-align: center;
  width: 40px;
  height: auto;
  margin-top: 6px;
}
.todo-item {
  width: 400px;
  display: flex;
  margin: 10px;
}
.box {
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: block;
}
.dashboard-todo-button {
  font-size: 15px;
  font-weight: 200;
  color: rgb(197, 26, 26);
  right: 350px;
  position: absolute;
  border: 0;
  background-color: rgb(255, 255, 255);
  margin-top: 6px;
}
.todo-label{
  text-decoration: line-through;
  color: #d9d9d9;
}
</style>
