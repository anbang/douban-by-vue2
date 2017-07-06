<template>
  <div class="feed-section">
    <router-link to="/?" class="feed-item" tag="a" v-for="item in recommend_feeds" :key="item.id">
      <!-- 布局1 -->
      <div v-if="item.layout !== 5">
        <div class="feed-content">
          <div class="cover"
               style="position: relative; background: center center / cover no-repeat rgb(250, 250, 250);"
               :style="{backgroundImage: 'url(' + item.target.cover_url + ')'}"
               @error="catchErr"
               v-if="item.target.cover_url"
          >
            <div style="padding-top: 100%"></div>
          </div>
          <h3>{{item.title}}</h3>
          <p>{{item.target.desc}}</p>
        </div>
        <div class="author">
          <span class="name">by {{item.target.author.name}}</span>
        </div>
        <span class="feed-label">{{item.source_cn}}</span>
      </div>

      <!-- 布局5 -->
      <div v-else="item.layout === 5">
        <div class="feed-content">
          <div class="photos">
            <div class="main"
                 style="position: relative; background: center center / cover no-repeat rgb(250, 250, 250);"
                 :style="{backgroundImage: 'url(' + item.target.cover_url + ')'}"
            >
              <div></div>
            </div>
            <div class="aside">
              <div class="aside-pic">
                <div
                  style="position: relative; background: center center / cover no-repeat rgb(250, 250, 250);"
                  :style="{backgroundImage: 'url(' + item.target.more_pic_urls[0] + ')'}"
                >
                  <div style="padding-top: 100%;"></div>
                </div>
              </div>
              <div class="aside-pic">
                <div
                  style="position: relative; background: center center / cover no-repeat rgb(250, 250, 250);"
                  :style="{backgroundImage: 'url(' + item.target.more_pic_urls[1] + ')'}"
                >
                  <div style="padding-top: 100%;"></div>
                </div>
                <div class="more-pic">
                  <span class="count">
                    {{item.target.photos_count-3}}+
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h3>{{item.title}}</h3>
        </div>
        <div class="author">
          <span class="name">by {{item.target.author.name}}</span>
        </div>
        <span class="feed-label">{{item.source_cn}}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'feed-section',
    props: [
      'recommend_feeds'
    ],
    data () {
      return {
        myData: []
      }
    },
    mounted: function () {
    },
    methods: {
      catchErr (e) {
//        const sourcesImg = e.target.getAttribute('src')
//        e.target.setAttribute('src', sourcesImg)
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  .feed-section .feed-item {
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0.9rem;
    position: relative;
    color: #494949
  }

  .feed-section .feed-item:active {
    background-color: #f2f2f2
  }

  .feed-section .feed-item .author {
    font-size: 1.2rem;
    color: #ccc
  }

  .feed-section .feed-item .feed-label {
    position: absolute;
    bottom: 2.5rem;
    right: 1.8rem;
    font-size: 1.2rem;
    color: #ccc
  }

  .feed-section .feed-item .feed-label.ad {
    color: #FFB7C0
  }

  .feed-section .feed-item .feed-label.ad:after {
    border: 0.1rem solid #FFBCC4
  }

  .feed-section .feed-content {
    overflow: hidden;
    margin-bottom: 1rem
  }

  .feed-section .feed-content .cover {
    width: 25.6%;
    margin-left: 2.5rem;
    float: right
  }

  .feed-section .feed-content .block-cover {
    height: 10rem
  }

  .feed-section .feed-content h3 {
    text-align: justify;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.41;
    color: #494949;
    margin-bottom: 0.6rem;
  }

  .feed-section .feed-content p {
    overflow: hidden;
    text-align: justify;
    color: #aaa;
    font-size: 1.2rem;
    line-height: 1.5;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3
  }

  .feed-section .feed-content .photos {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 10px
  }

  .feed-section .feed-content .photos .main {
    -webkit-box-flex: 3.2;
    -webkit-flex: 3.2;
    -ms-flex: 3.2;
    flex: 3.2;
    margin-right: 4px
  }

  .feed-section .feed-content .photos .aside {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column
  }

  .feed-section .feed-content .photos .aside .aside-pic ~ .aside-pic {
    margin-top: 4px
  }

  .feed-section .feed-content .photos .aside .aside-pic {
    position: relative
  }

  .feed-section .feed-content .photos .more-pic {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
  }

  .feed-section .feed-content .photos .more-pic .count {
    width: 100%
  }
</style>
