<template>
  <el-col :span="6">
    <el-card shadow="hover">
      <div class="icon-wrapper dashboard-card" :class="`icon__${iconName}`">
        <icon-font class="dashboard-card-icon" :icon-name="iconName" />
      </div>
    </el-card>
  </el-col>
</template>
<script>
export default {
  name: 'dashboardCard',
  props: {
    iconName: String
  }
}
</script>

<style scoped>
.dashboard-card-icon {
  font-size: 48px;
}

.icon-wrapper {
  padding: 10px;
  height: 68px;
  width: 68px;
  border-radius: 5px;
}

.el-card:hover .icon-font {
  color: #fff;
}

.icon__\#icon-users {
  color: #40c9c6;
}

.el-card:hover .icon__\#icon-users {
  background-color: #40c9c6;
}

.icon__ChatDotSquare {
  color: #36a3f7;
}

.el-card:hover .icon__ChatDotSquare {
  background-color: #36a3f7;
}
</style>
