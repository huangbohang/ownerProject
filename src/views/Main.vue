<template>
    <div class="main">
<!--        <Sky class="sky"/>-->
    </div>
</template>

<script>
    import Sky from './pages/Sky'
  export default {
    name: 'Main',
    components:{Sky},
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
        .sky{
            width: 100%;
            height: 100%;
        }
</style>
