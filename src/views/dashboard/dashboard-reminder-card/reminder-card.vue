<template>
  <el-card class="box-card">
    <div class="dashboard-reminderCard-img">
      <img class="reminderCard-img" src="./dashboards.png" />
    </div>
    <div class="dashboard-reminderCard-gif">
      <div class="reminderCard-gif"></div>
    </div>
    <a href="#">
      <span class="dashboard-reminderCard-span"> vue-element-admin </span>
    </a>
    <div class="dashboard-reminderCard-progress">
      <CardProgress />
    </div>
  </el-card>
</template>
<script setup>
import CardProgress from './card-progress.vue'
</script>
<style scoped>
.box-card {
  margin-top: 30px;
  margin-left: 10px;
  width: 25%;
  height: 410px;
}
.dashboard-reminderCard-img {
  margin-top: -20px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column-reverse;
  align-items: center;
}
.dashboard-reminderCard-img:hover .reminderCard-img {
  transform: scale(1.1, 1.1);
  filter: contrast(130%);
}
.dashboard-reminderCard-gif {
  margin-top: -20px;
  margin-left: 15px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dashboard-reminderCard-gif .reminderCard-gif {
  background-image: url('./dashboardCard.gif');
  background-size: 100% 100%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  z-index: 9999;
  transition: transform 0.6s; /* 添加过渡效果，使旋转动画平滑 */
}
.dashboard-reminderCard-span {
  margin-top: -20px;
  position: absolute;
  margin-left: 110px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(67, 194, 145);
}
.dashboard-reminderCard-progress {
  margin-left: -6px;
}
.dashboard-reminderCard-gif:hover .reminderCard-gif {
  transform-origin: top right; /* 设置旋转的原点为右上角 */
  transform: rotate(-90deg); /* 悬浮时进行90度的旋转 */
}
.dashboard-reminderCard-gif:not(:hover) .reminderCard-gif {
  transition: transform 0.6s; /* 添加过渡效果，使返回动画平滑 */
  transform-origin: top right; /* 设置旋转的原点为右上角 */
  transform: rotate(0deg); /* 鼠标离开时返回原始状态，即无旋转 */
}
</style>
