<template>
  <div class="container col">
<!--    <Nav class="nav"/>-->
    <Header class="header"/>
    <Main class="main"/>
  </div>
</template>

<script>
import Header from './Head/Header'
import Nav from './Nav'
import Main from './Main'
export default {
  name: 'home',
  components: { Nav ,Main,Header}
}
</script>
<style scoped lang="less">
    @header-height:50px;
  .container{
    display: flex;
    width: 1200px;
    margin: auto;
    height: 100%;
  }
  .col{
      flex-direction: column;
    .header{
      height: @header-height;
      width: 100%;
      line-height: @header-height;
    }
    .main{
      height: calc(100%- @header-height);
      width: 100%;
    }
  }
  .row{
    .nav{
      width: 20%;
      height: 100%;
    }
    .main{
      width: 80%;
      height: 100%;
    }
  }
</style>
