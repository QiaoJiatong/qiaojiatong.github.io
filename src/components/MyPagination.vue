<template>
  <el-select :value="pageSize" :placeholder="`每页${pageSize}行`" @change="sizeChangeHandler">
    <el-option v-for="(pageSizeNumber, index) in pageSizes" :key="index" :value="pageSizeNumber">
      每页{{ pageSizeNumber }}行
    </el-option>
  </el-select>
  <el-button @click="previousPage" :disabled="previousDisabled">&lt;</el-button>
  <el-button
    v-for="page in pageNums"
    :key="page"
    @click="pageChangeHandler(page)"
    :type="page === currentPage ? 'primary' : ''"
  >
    {{ page }}
  </el-button>
  <el-button @click="nextPage" :disabled="nextDisabled">&gt;</el-button>
  <span>
    跳转到
    <el-input v-model="redirectPage" @keyup.enter="pageChangeHandler(redirectPage)" />
    页
  </span>
</template>
<script>
export default {
  emits: ['size-change', 'current-change', 'click-previous', 'click-next'],
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize)
    },
    previousDisabled() {
      return this.currentPage === 1
    },
    nextDisabled() {
      return this.currentPage === this.pageCount
    },
    pageNums() {
      const arr = []
      for (let k = 1; k <= this.pageCount; k++) {
        arr.push(k)
      }
      return arr
    }
  },
  data() {
    return {
      pageSizes: [20, 30, 40, 50],
      redirectPage: 1
    }
  },
  methods: {
    sizeChangeHandler(e) {
      console.log(e)
      this.$emit('size-change', e)
    },
    previousPage() {
      this.$emit('current-change', this.currentPage - 1)
    },
    nextPage() {
      this.$emit('current-change', this.currentPage + 1)
    },
    pageChangeHandler(btnIndex) {
      this.$emit('current-change', btnIndex)
    }
  }
}
</script>
<style scoped>
button {
  border: unset;
  cursor: pointer;
  margin: 5px;
}
.el-select {
  width: 120px;
}
.el-input {
  width: 40px;
  text-align: center;
}
</style>
