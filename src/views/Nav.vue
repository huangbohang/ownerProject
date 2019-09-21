<template>
    <div class="left-nav">
        <div class="introduce">
            <span class="title">凉瓜拌面</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Nav',
    data () {
      return {}
    },
    props: {},
    mounted () {
    },
    methods: {}
  }
</script>
<style scoped lang="less">
    .left-nav{
        z-index: 9;
        background: linear-gradient(to right, white , #c5c5c5);
        border: 1px solid #ddd;
        text-align: center;
        .introduce{
            .title{

            }
        }
    }
</style>
