<template>
  <div class="full-container-column">
    <mavon-editor v-model="value" class="mavan-editor" />
    <div class="center">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
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
      const data = {
        title: '测试用例',
        content: this.value
      }
      const url = '/markdown/add.php'
      this.$postXhr(url, data).then(res => this.$resMessage(res)).catch()
    },
    savse() {
      var search_url = '/interface.php'
      const data = {
        action: 'get_list'
      }
      request({
        baseURL: '/api/',
        url: search_url,
        method: 'get',
        params: data
      }).then(res => {
        console.log(res)
      }).catch(req => {
        console.log(req)
      })
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

