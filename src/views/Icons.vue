<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <a href="https://element-plus.gitee.io/zh-CN/component/icon.html" target="_blank"
          >使用指南</a
        >
      </el-header>
      <el-header>
        <el-button @click="iconType = 'myIcons'">icons</el-button>
        <el-button @click="iconType = 'elementUI-Icons'">ElementUI-icons</el-button>
      </el-header>
      <el-main>
        <div v-if="iconType === 'myIcons'" class="Icons-box">
          <div v-for="item in iconsData" :key="item" class="Icons-Icon">
            <icon-font :icon-name="item" @click="copyIcon(item)" />
            <div>{{ item }}</div>
          </div>
        </div>
        <div v-else class="Icons-box">
          <div v-for="item in ElementIconsData" :key="item" class="Icons-Icon">
            <icon-font :icon-name="item" @click="copyIcon(item)" />
            <div>{{ item }}</div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'myIcons',
  data() {
    return {
      iconType: 'myIcons',
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
      ElementIconsData: [
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
      let icon = `"<icon-font :icon-name="${item}"/>"`
      this.$copyText(icon).then(
        function () {
          alert('已复制到剪切板')
        },
        function () {
          alert('复制失败')
        }
      )
    }
  }
}
</script>
<style scoped>
.Icons-Icon {
  display: flex;
  margin: 15px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.Icons-Icon .icon-font {
  font-size: 35px;
}
.Icons-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
