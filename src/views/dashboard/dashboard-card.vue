<template>
    <el-col class="dashboard-card-col" :span="5">
      <el-card shadow="hover">
        <div class="card-content">
          <div class="icon-wrapper dashboard-card" :class="`icon__${iconName}`">
            <icon-font class="dashboard-card-icon" :icon-name="iconName" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">{{ cardText }}</div>
            <span class="card-panel-num">{{ cardNum }}</span>
          </div>
        </div>
      </el-card>
    </el-col>
</template>
<script>
export default {
  name: 'DashboardCard',
  props: {
    iconName: String,
    cardText: String,
    cardNum: Number
  }
}
</script>

<style scoped>
.dashboard-card-icon {
  font-size: 48px;
}

.icon-wrapper {
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
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

.icon__\#icon-money {
  color: #f4516c;
}

.el-card:hover .icon__\#icon-money {
  background-color: #f4516c;
}

.icon__ShoppingCart {
  color: #34bfa3;
}

.el-card:hover .icon__ShoppingCart {
  background-color: #34bfa3;
}

.card-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-panel-description {
  display: flex;
  margin-right: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
.card-panel-text {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}

.dashboard-card-col {
  margin: 20px;
}
</style>
