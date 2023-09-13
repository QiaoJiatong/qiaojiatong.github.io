<template>
  <div class="todo-item">
    <input @click="todoClickHandler" class="box" type="checkbox" :id="item.id" check />
    <label :for="item.id">{{ item.content }}</label>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object
  },
  data() {
    return {
      show: false,
      timer: null
    }
  },
  emits: ['item-complete'],
  methods: {
    todoClickHandler() {
      this.$emit('item-complete')
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
  padding-right: 20px;
  display: flex;
}

.popup {
  position: fixed;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  background-color: #d36767;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  z-index: 999;
}
.box {
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: block;
}
</style>
