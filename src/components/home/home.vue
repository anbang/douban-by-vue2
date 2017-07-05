<template>
  <div class="card">
    <quick-nav></quick-nav>
    首页组件
  </div>
</template>

<script>
  import QuickNav from '@/base/quick-nav/quick-nav.vue'
  export default {
    components: {
      QuickNav
    }
  }
</script>

<style scoped>
  .card{
    margin: 0 0.9rem;
  }
</style>
