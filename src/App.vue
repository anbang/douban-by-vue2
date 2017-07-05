<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from '@/components/m-header/m-header.vue'

  export default {
    name: 'app',
    components: {
      MHeader
    }
  }
</script>

<style>

</style>
