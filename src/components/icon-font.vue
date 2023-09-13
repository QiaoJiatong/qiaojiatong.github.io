<template>
  <svg v-if="isIconFont" class="icon-font iconfont" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
  <el-icon v-else class="icon-font">
    <component :is="iconName" />
  </el-icon>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    required: true
  }
})

const isIconFont = computed(() => {
  return props.iconName.startsWith('#')
})
</script>

<style scoped>
.icon-font {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
