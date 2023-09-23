<template>
  <div>
    <div class="dashboard-editor-container">
      <dashboardGitHub />
      <el-row class="dashboard-editor-row" :gutter="20">
        <DashboardCard
          v-for="(card, index) in cardData"
          :key="index"
          :iconName="card.iconName"
          :cardText="card.cardText"
          :card-num="card.cardNum"
        />
      </el-row>
      <Echarts />
      <div class="dashboard-editor-table">
        <DashboardTable />
        <dashboardTodo2Vue />
        <reminderCard />
      </div>
    </div>
  </div>
</template>
<script>
import DashboardCard from './dashboard-card.vue'
import DashboardTable from './dashboard-table/dashboard-table.vue'
import dashboardTodo2Vue from './dashboard-todo/dashboard-todo2.vue'
import reminderCard from './dashboard-reminder-card/reminder-card.vue'
import dashboardGitHub from './dashboard-gitHub.vue'
import Echarts from './echarts.vue'
export default {
  name: 'Dashboard',
  components: {
    DashboardCard,
    DashboardTable,
    dashboardTodo2Vue,
    reminderCard,
    dashboardGitHub,
    Echarts
  },
  data() {
    return {
      cardData: [
        {
          iconName: '#icon-users',
          cardText: 'New Visits',
          cardNum: 457399
        },
        {
          iconName: '#icon-money',
          cardText: 'Purchases',
          cardNum: 5457468
        },
        {
          iconName: 'ChatDotSquare',
          cardText: 'Messages',
          cardNum: 547589
        },
        {
          iconName: 'ShoppingCart',
          cardText: 'Shoppings',
          cardNum: 856759
        }
      ]
    }
  }
}
</script>
<style scoped>
.dashboard-editor-container {
  background-color: rgb(208, 226, 228);
}
.dashboard-editor-row {
  top: 30px;
}
.dashboard-editor-table {
  display: flex;
  flex-direction: row;
}

.dashboard-todo {
  height: 390px;
}
</style>
