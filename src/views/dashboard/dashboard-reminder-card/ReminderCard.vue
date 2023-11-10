<template>
  <el-card class="box-card">
    <div class="dashboard-reminderCard-img">
      <img class="reminderCard-img" src="/dashboards.png" />
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
import CardProgress from './CardProgress.vue'
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
  transition: transform 0.5s;
  transform: scale(1.1, 1.1);
  filter: contrast(130%);
}

.dashboard-reminderCard-img:not(:hover) .reminderCard-img {
  transition: transform 0.5s;
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
  background-image: url('/avatar.webp');
  background-size: 100% 100%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  z-index: 9999;
  transition: transform 0.6s;
}
.dashboard-reminderCard-span {
  margin-top: -20px;
  position: absolute;
  margin-left: 110px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(67, 194, 145);
}
.dashboard-reminderCard-gif:hover .reminderCard-gif {
  transform-origin: top right;
  transform: rotate(-90deg);
}
.dashboard-reminderCard-gif:not(:hover) .reminderCard-gif {
  transition: transform 0.6s;
  transform-origin: top right;
  transform: rotate(0deg);
}
</style>
