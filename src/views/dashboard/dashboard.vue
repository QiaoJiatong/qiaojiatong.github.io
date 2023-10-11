<template>
  <div>
    <div class="dashboard-editor-container">
      <dashboard-github />
      <DashboardCard />
      <MyEcharts />
      <div class="dashboard-editor-table">
        <DashboardTable />
        <!-- 组件名尽量要和文件保持一致 -->
        <DashboardTodo />
        <reminderCard />
      </div>
    </div>
  </div>
</template>
<script>
import DashboardCard from './DashboardCard.vue'
import DashboardTable from './dashboard-table/DashboardTable.vue'
import DashboardTodo from './dashboard-todo/DashboardTodo.vue'
import reminderCard from './dashboard-reminder-card/ReminderCard.vue'
import DashboardGithub from './DashboardGithub.vue'
import MyEcharts from './MyEcharts.vue'
export default {
  name: 'Dashboard',
  components: {
    DashboardCard,
    DashboardTable,
    DashboardTodo,
    reminderCard,
    DashboardGithub,
    MyEcharts
  }
}
</script>
<style scoped>
.dashboard-editor-container {
  position: relative;
  background-color:#eceef1;
  padding: 10px;
}

.dashboard-editor-table {
  display: flex;
  flex-direction: row;
}

.dashboard-todo {
  height: 390px;
}
</style>
