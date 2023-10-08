<template>
  <a
    href="https://github.com/QiaoJiatong/qiaojiatong.github.io"
    target="_blank"
    class="github-corner"
  >
    <icon-font class="dashboard-card-gitHub" icon-name="#icon-github" />
  </a>
</template>
<script>
export default {
  name: 'DashboardGithub'
}
</script>
<style scoped>
.dashboard-card-gitHub {
  width: 30px;
  height: 30px;
  margin-bottom: 16px;
  margin-right: 15px;
  color: white;
  transform: rotate(45deg);
}
.github-corner {
  display: flex;
  margin-top: -10px;
  right: 0px;
  position: absolute;
  width: 80px;
  height: 80px;
  background: linear-gradient(to top right, transparent 50%, rgb(105, 207, 160) 50%);
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-content: flex-end;
  justify-content: center;
}
</style>
