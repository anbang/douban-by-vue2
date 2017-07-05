import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Movie from '@/components/movie/movie.vue'
import Book from '@/components/book/book.vue'
import Status from '@/components/status/status.vue'
import Group from '@/components/group/group.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    }
  ]
})
