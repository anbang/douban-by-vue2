<template>
  <section class="movie_showing">
    <header>
      <h2 v-text="module_title ? module_title : movie_data.subject_collection.name"></h2>
      <a :href="movie_more">更多</a>
    </header>
    <div class="section-content">
      <ul class="row items">
        <li class="item item__movie" v-for="item in movie_data.subject_collection_items" :key="item.id">
          <a :href="item.url">
            <div class="item-poster" v-lazy:background-image="item.cover.url"></div>
            <span class="item-title">{{item.title}}</span>
            <div class="item-rating">
              <div class="rank">
                <span class="rating-stars" :data-rating="item.rating.value">
                  <span class="rating-star " :class="item.rating.value >= 2 ?'rating-star-small-full' : 'rating-star-small-gray'"></span>
                  <span class="rating-star " :class="item.rating.value >= 4 ?'rating-star-small-full' : 'rating-star-small-gray'"></span>
                  <span class="rating-star " :class="item.rating.value >= 5 ?'rating-star-small-full' : 'rating-star-small-gray'"></span>
                  <span class="rating-star " :class="item.rating.value >= 7.3 ?'rating-star-small-full' : 'rating-star-small-gray'"></span>
                  <span class="rating-star " :class="item.rating.value >= 9 ?'rating-star-small-full' : 'rating-star-small-gray'"></span>
                </span>
                <span>{{item.rating.value}}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props: [
      'movie_data',
      'module_title',
      'movie_more'
    ]
  }
</script>

<style>

  h2 {
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0
  }

  a {
    color: #42bd56;
    text-decoration: none
  }

  section {
    margin: 0;
    overflow: hidden;
    background-color: #fff
  }

  section:first-child {
    padding-top: 1rem
  }

  section h2 {
    display: inline-block;
    min-width: 4em;
    margin-bottom: 0;
    color: #111;
    padding-left: 0;
    padding-bottom: 0;
    font-size: 1.7rem
  }

  section footer {
    padding: 5px;
    border-bottom: 1px solid #F2F2F2
  }

  section footer a {
    display: block;
    padding: .8em;
    text-align: center;
    color: #111;
    font-size: .88rem
  }

  section header a {
    float: right;
    font-size: .9rem;
    line-height: 1.5rem
  }

  section .section-content {
    margin-bottom: -1.12rem
  }

  .row {
    border-bottom: 1px solid #F2F2F2;
    padding: 15px 0 43px 0
  }

  .items {
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch
  }

  .items > * {
    font-size: .94rem;
    white-space: normal
  }

  .item {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    text-align: center
  }

  .item a {
    color: #111
  }

  .item {
    margin-left: 0.48rem
  }

  .item:first-child {
    margin-left: 1.12rem
  }

  .item:last-child {
    margin-right: 1.12rem
  }

  .item-poster {
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center
  }

  .item-poster:before {
    content: "";
    float: left;
    margin-top: 142.85714%
  }

  .item-title {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 1rem;
    line-height: 1rem
  }

  .item-rating {
    color: #aaa;
    line-height: .94rem;
    margin-top: .3rem;
    font-size: .72rem
  }

  .item__movie .item-title {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal
  }

  .item__event .item-title {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
  }

  /* star */
  .rating-stars {
    display: inline-block;
    vertical-align: middle
  }

  .rating-stars .rating-star {
    display: inline-block;
    margin-right: 1px;
    background-color: transparent;
    background-repeat: no-repeat
  }

  .rating-star-small-full, .rating-star-small-half, .rating-star-small-gray {
    width: 10px;
    height: 10px;
    background-size: 10px 10px
  }

  .rating-star-small-full {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==")
  }

  .rating-star-small-gray {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=")
  }

</style>
