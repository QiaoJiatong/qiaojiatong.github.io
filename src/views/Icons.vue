<template>
  <div class="common-layout">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="myIcons" name="first" class="icons-box">
        <div v-for="item in iconsData" :key="item" class="icons-icon">
          <icon-font :icon-name="item" @click="copyIcon(item)" />
          <div>{{ item }}</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="ElementIcons" name="second" class="icons-box">
        <div v-for="item in elementIconsData" :key="item" class="icons-icon">
          <icon-font :icon-name="item" @click="copyIcon(item)" />
          <div>{{ item }}</div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { ElMessage } from 'element-plus'
export default {
  name: 'myIcons',
  data() {
    return {
      activeName: 'first',
      iconsData: [
        '#icon-users',
        '#icon-money',
        'ShoppingCart',
        'House',
        'Document',
        'Position',
        'Lock',
        '#icon-component',
        'Grid',
        '#icon-i',
        'HelpFilled',
        'Histogram',
        '#icon-routes',
        'ChatDotSquare',
        '#icon-table',
        'WarnTriangleFilled',
        'QuestionFilled'
      ],
      elementIconsData: [
        'Unlock',
        'Plus',
        'Minus',
        'CirclePlus',
        'Search',
        'Female',
        'Male',
        'House',
        'Setting',
        'ChatDotRound',
        'Message',
        'Delete',
        'UserFilled',
        'Microphone',
        'Location',
        'OfficeBuilding',
        'Food',
        'Goblet',
        'Calendar',
        'Goods',
        'Handbag',
        'Phone',
        'PriceTag',
        'Pouring',
        'ShoppingCart',
        'Umbrella',
        'AlarmClock'
      ]
    }
  },
  methods: {
    copyIcon(item) {
      const icon = `"<icon-font :icon-name="${item}"/>"`
      this.$copyText(icon).then(
        function () {
          ElMessage({
            showClose: true,
            message: '复制成功',
            type: 'success'
          })
        },
        function () {
          ElMessage('复制失败')
        }
      )
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.icons-icon {
  display: flex;
  margin: 15px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  width: 100px;
}
.icons-icon:hover {
  color: rgb(29, 29, 243);
}
.icons-icon .icon-font {
  font-size: 35px;
}
.icons-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
