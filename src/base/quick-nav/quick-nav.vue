<template>
  <ul class="quick-nav">
    <router-link to="/movie/nowintheater" tag="li" class="quick-nav-item">
      <span class="nav-item-info">影院热映</span>
    </router-link>
    <router-link to="/group/explore/rent/" tag="li" class="quick-nav-item">
      <span class="nav-item-info">租房找室友</span>
    </router-link>
    <router-link to="/time" tag="li" class="quick-nav-item">
      <span class="nav-item-info">豆瓣时间</span></router-link>
    <li class="quick-nav-item">
      <a href="#"><span class="nav-item-info">使用豆瓣App</span>
      </a>
    </li>
  </ul>
</template>
<script>
  // TODO 租房找室友 需要随机生成
</script>

<style scoped>
  .quick-nav {
    /*margin-top: 0.6rem;*/
    padding: 2rem 0 0 0;
    overflow: hidden;
  }

  .quick-nav .quick-nav-item {
    box-sizing: border-box;
    width: 50%;
    float: left;
    padding: 0.3rem;
    font-size: 1.6rem;
  }

  .nav-item-info {
    background-color: #f6f6f6;
    color: #494949;
    text-align: center;
    line-height: 2rem;
    padding: 0.6rem 0;
    border-radius: 0.2rem;
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
</style>
