<template>
  <el-dialog :model-value="visible" :before-close="cancel" :title="popTitle">
    <el-form :model="formData">
      <el-form-item label="nationality: " :label-width="formLabelWidth">
        <el-select v-model="formData.nationality" placeholder="Please select nationality">
          <el-option v-for="item in filterNationality" :key="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item label="Date:" :label-width="formLabelWidth">
        <el-date-picker
          v-model="formData.date"
          type="datetime"
          placeholder="Select date"
          :shortcuts="shortcuts"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item
        v-for="item in formItems"
        :key="item"
        :label="item + ': '"
        :label-width="formLabelWidth"
      >
        <el-rate v-if="item === 'imp'" :max="3" v-model="formData[item]" :colors="colors" />
        <el-input v-else v-model="formData[item]" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel"> Cancel </el-button>
        <el-button type="primary" @click="save"> ConfirmDraft </el-button>
        <el-button type="primary" @click="publish"> Publish </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { PUBLISH_STATUS } from './constants'

export default {
  name: 'DialogForm',
  props: {
    visible: Boolean,
    filterNationality: Array,
    initForm: Object,
    popTitle: String
  },
  watch: {
    visible(newVisible) {
      if (newVisible) {
        this.formData = { ...this.initForm }
      }
    }
  },
  data() {
    return {
      formItems: ['title', 'name', 'imp', 'reviewer', 'remark'],
      formLabelWidth: '140px',
      formData: {}
    }
  },
  emits: ['save', 'cancel'],
  methods: {
    save() {
      this.$emit('save', this.formData, PUBLISH_STATUS.draft)
    },
    publish() {
      this.$emit('save', this.formData, PUBLISH_STATUS.published)
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
<style></style>
