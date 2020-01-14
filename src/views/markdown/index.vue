<template>
  <div class="full-container-column">
    <mavon-editor v-model="value" class="mavan-editor" />
    <div class="center">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { mavonEditor },
  data() {
    return {
      value: '',
      defaultData: 'preview'
    }
  },
  methods: {
    save() {

    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/index.scss";
  .mavan-editor{
    margin-bottom: $paddingDistance;
    flex: 1;
  }
</style>

