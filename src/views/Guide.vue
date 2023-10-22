<template>
  <div v-permission="'admin'">Guide</div>
  <RouterView />
</template>
<script>
export default {
  name: 'Guide'
}
</script>

<style scoped></style>
