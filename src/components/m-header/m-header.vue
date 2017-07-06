<template>
  <div class="header">
    <router-link to="/" tag="h1" class="header-logo">豆 +</router-link>
    <div class="header-list">
      <router-link to="/movie"  class="list-item" tag="div"><span class="tab-link" style="color: #2384E8;">电影</span></router-link>
      <router-link to="/book"   class="list-item" tag="div"><span class="tab-link" style="color: #9F7860;">图书</span></router-link>
      <router-link to="/status" class="list-item" tag="div"><span class="tab-link" style="color: #E4A813;">广播</span></router-link>
      <router-link to="/group"  class="list-item" tag="div"><span class="tab-link" style="color: #2AB8CC;">小组</span></router-link>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .header{
    display: flex;
    border-bottom: 1px solid #f3f3f3;
    background: #fff;
    justify-content: space-between;
    padding: 0 1.8rem;
    height: 4.7rem;
    line-height: 4.7rem;
  }
  .header .header-logo{
    color: #00b600;
  }
  .header-list{
    vertical-align: middle;
  }
  .header-list .list-item{
    display: inline-block;
    font-size: 1.5rem;
    margin-right: 0.8rem;
  }
</style>
