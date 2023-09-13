<template>
  <h1>dashboard</h1>
  <el-row :gutter="20">
    <DashboardCard v-for="(card, index) in cardData" :key="index" :icon-name="card" />
  </el-row>
  <DashboardTodoVue />
</template>
<script>
import DashboardCard from './dashboard-card.vue'
import DashboardTodoVue from './dashboard-todo/dashboard-todo.vue'
export default {
  name: 'Dashboard',
  components: { DashboardCard, DashboardTodoVue },
  data() {
    return {
      cardData: ['#icon-users', 'ChatDotSquare', '#icon-money', 'ShoppingCart']
    }
  }
}
</script>
