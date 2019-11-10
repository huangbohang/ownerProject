<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  @import './assets/css/common.less';
  @import './assets/css/extend.less';
  body,html,#app{
    width: 100%;
    height: 100%;
    margin: 0;
    padding:0;
    overflow: hidden;

  }
  #app{
  }
</style>
