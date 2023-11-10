import { computed, ref } from 'vue'

export default function usePagination(filterTableData) {
  const pageSize = ref(30)
  const currentPage = ref(1)
  const total = computed(() => {
    return filterTableData.value.length
  })

  const pageCount = computed(() => {
    return Math.ceil(total.value / pageSize.value)
  })

  const sizeChangeHandler = (e) => {
    currentPage.value = 1
    pageSize.value = Number(e)
  }
  const pageChangeHandler = (page) => {
    if (page < 1 || page > pageCount.value) {
      return
    }
    currentPage.value = page
  }
  return {
    pageSize,
    currentPage,
    total,
    sizeChangeHandler,
    pageChangeHandler
  }
}
