<template>
  <div style="margin-left: 180px">
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      class="item-tag"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
  </div>
</template>
<script setup>
import _ from 'lodash'
import { ref } from 'vue'
import routes from '../router/route'
const dynamicTags = ref([])
const handleClose = (tag) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}
dynamicTags.value = _.uniqBy(routes, 'name').map((item) => item.name)
</script>
<style scoped>
.item-tag {
    margin-left: 15px;
}
</style>
