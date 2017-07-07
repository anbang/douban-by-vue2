<template>
  <div class="loading">
    <img width="40" height="40" src="./loading_green.gif">
    <!--<p class="desc">{{title}}</p>-->
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped>

  .loading{
    width: 100%;
    text-align: center;
  }
  .loading  .desc{
      line-height: 2rem;
      font-size: 1.4rem;
      color: #00b600;
    }
</style>
