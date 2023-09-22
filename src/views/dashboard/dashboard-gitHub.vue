<template>
  <a
    href="https://github.com/QiaoJiatong/qiaojiatong.github.io"
    target="_blank"
    class="github-corner"
  >
    <icon-font
      class="dashboard-card-gitHub"
      icon-name="#icon-github"
    />
  </a>
</template>
<script>
export default {
  name: 'DashboardGitHub'
}
</script>
<style scoped>
.dashboard-card-gitHub {
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  margin-right: 26px;
  color: white;
  transform: rotate(45deg);
}
.github-corner {
  display: flex;
  right: 27px;
  position: absolute;
  width: 120px;
  height: 120px;
  background: linear-gradient(to top right, transparent 50%, rgb(105, 207, 160) 50%);
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-content: flex-end;
  justify-content: center;
}
</style>
