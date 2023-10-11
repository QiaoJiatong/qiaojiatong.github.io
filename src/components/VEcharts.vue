<template>
  <div ref="elRef" class="v-echarts"></div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({
  option: Object
})

const elRef = ref()

let echartInstance = null

onMounted(() => {
  echartInstance = echarts.init(elRef.value)
  echartInstance.setOption(props.option)
})

watch(
  () => props.option,
  (option) => {
    if (echartInstance) {
      echartInstance.setOption(option)
    }
  },
  { deep: true }
)
</script>
<style scoped>
.v-echarts {
  min-height: 200px;
  min-width: 200px;
}
</style>
