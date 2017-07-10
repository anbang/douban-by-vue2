<template>
  <div class="card">
    <loading class="movie-loading" v-show="!movie_hot.movie_hot_data"></loading>
    <movie-module :movie_data="movie_hot.movie_hot_data" :module_title="movie_hot.movie_hot_title" :movie_more="movie_hot.movie_hot_more_url"></movie-module>
    <movie-module :movie_data="movie_free.movie_free_data" :module_title="movie_free.movie_free_title" :movie_more="movie_free.movie_free_more_url"></movie-module>
    <movie-module :movie_data="movie_latest.movie_latest_data" :module_title="movie_latest.movie_latest_title" :movie_more="movie_latest.movie_latest_more_url"></movie-module>
    <br>
    <br>
    <br>
    电影组件
  </div>
</template>

<script>
  import Loading from '@/base/loading/loading.vue'
  import { getMovieHotData, getMovieFreeData, getMovieLatestData } from '@/api/movie-data'
  import MovieModule from '@/base/movie-module/movie-module.vue'

  export default {
    data () {
      return {
        movie_hot: {
          movie_hot_data: {},
          movie_hot_title: '',
          movie_hot_more_url: '/movie/nowintheater?loc_id=108288'
        },
        movie_free: {
          movie_free_data: {},
          movie_free_title: '免费在线观影',
          movie_free_more_url: '/movie/watchonline'
        },
        movie_latest: {
          movie_latest_data: {},
          movie_latest_title: '新片速递',
          movie_latest_more_url: '/movie/latest'
        }
      }
    },
    components: {
      Loading,
      MovieModule
    },
    created () {
      this._getMovieDate()
    },
    methods: {
      _getMovieDate () {
        getMovieHotData().then((res) => {
          this.movie_hot.movie_hot_data = res
        })
        getMovieFreeData().then((res) => {
          this.movie_free.movie_free_data = res
        })
        getMovieLatestData().then((res) => {
          this.movie_latest.movie_latest_data = res
        })
      }
    }
  }
</script>

<style>
  .card {
    margin: 1rem 0.9rem;
  }

  .movie-loading {
    margin: 5rem auto;
  }
</style>
