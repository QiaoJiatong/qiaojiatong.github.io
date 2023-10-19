<template>
  <el-scrollbar>
    <div class="tab-bar">
      <router-link v-for="tab in tabData" :key="tab.path" class="tab-bar__item" :to="tab.path">
        {{ tab.name }}
        <el-icon v-if="tab.path !== routes[0].path" @click.prevent.stop="closeView(tab)"
          ><Close
        /></el-icon>
      </router-link>
    </div>
  </el-scrollbar>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import routes from '../router/route'
import _ from 'lodash'

const tabData = ref([])
const route = useRoute()
const router = useRouter()

onMounted(() => {
  tabData.value.push(routes[0])
})

watch(route, (newRoute) => {
  if (tabData.value.some((tab) => tab.path === newRoute.path)) {
    return
  }
  //  自己写一个cloneDeep方法
  tabData.value.push(_.cloneDeep(newRoute))
})

// const cloneDeep = (item) => {
//     if(item === null){
//         return
//     }else{

//     }
// }
const closeView = (view) => {
  console.log(view)
  tabData.value = tabData.value.filter((tab) => tab !== view)
  if (view.path === route.path) {
    router.push(tabData.value[0].path)
  }
}
</script>
<style scoped>
.tab-bar {
  height: 40px;
  display: flex;
}
.tab-bar__item {
  position: relative;
  cursor: pointer;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-top: 4px;
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.router-link-active {
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
  &::before {
    content: '';
    background: #fff;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
    margin-right: 2px;
  }
}
.tab-bar .router-link .el-icon {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
