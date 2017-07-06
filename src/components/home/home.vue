<template>
  <div class="card">
    <quick-nav></quick-nav>
    <feed-section :recommend_feeds="recommend_feeds"></feed-section>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    首页组件2
  </div>
</template>

<script>
  import QuickNav from '@/base/quick-nav/quick-nav.vue'
  import FeedSection from '@/base/feed-section/feed-section.vue'
  import {getHomeData} from '@/api/home-data.js'

  export default {
    data () {
      return {
        recommend_feeds: []
      }
    },
    components: {
      QuickNav,
      FeedSection
    },
    created () {
      this.starGetHomeData()
    },
    methods: {
      starGetHomeData () {
        getHomeData().then((res) => {
          console.log(res.recommend_feeds)
          this.recommend_feeds = res.recommend_feeds
        })
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 0 0.9rem;
  }
</style>
