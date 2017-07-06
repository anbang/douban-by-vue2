<template>
  <div id="app">
    <header class="dou-header">
      <m-header></m-header>
    </header>
    <div class="dou-bodyer">
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from '@/components/m-header/m-header'

  export default {
    name: 'app',
    components: {
      MHeader
    }
  }
</script>

<style>
  .dou-header{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index:999;
  }
  .dou-bodyer{
    padding-top: 4.7rem;
  }
  #app{
    -webkit-user-select: none;
  }
</style>
