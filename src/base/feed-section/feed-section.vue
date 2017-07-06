<template>
  <div class="feed-section">
    <!-- 布局1 -->
    <router-link to="/?" class="feed-item" tag="a">
      <div class="feed-content">
        <div class="cover"
             style='position: relative;background: url("https://qnmob2.doubanio.com/lpic/s29459711.jpg?imageView2/2/q/80/w/330/h/330/format/jpg") center center / cover no-repeat rgb(250, 250, 250);'>
          <div style="padding-top: 100%;"></div>
        </div>
        <h3>一周豆瓣热门图书｜寺山修司又开了一家奇妙图书馆</h3>
        <p>
          七月第一周，冷知识狂魔寺山修司《不思议图书馆》开业迎宾，在奇闻异事的海洋中做一场白日梦；青山七惠转型之作《快乐》探测人性与欲望的深暗边界；《醒来的女性》以疼痛写就一代美国女性的荆棘之路；韩松落随笔新作书写小镇青年的成长史诗。
        </p>
      </div>
      <div class="author">
        <span class="name">豆瓣读书</span>
      </div>
      <span class="feed-label">来自栏目 一周热门图书</span>
    </router-link>

    <!-- 布局5 -->
    <router-link to="/?" class="feed-item" tag="a">
      <div class="feed-content">
        <div class="photos">
          <div class="main"
               style="">
            <div></div>
          </div>
          <div class="aside">
            <div class="aside-pic">
              <div
                style="">
                <div style="padding-top: 100%;"></div>
              </div>
            </div>
            <div class="aside-pic">
              <div
                style="">
                <div style="padding-top: 100%;"></div>
              </div>
              <div class="more-pic">
                <span class="count"></span>
              </div>
            </div>
          </div>
        </div>
        <h3>冰岛星球</h3>
      </div>
      <div class="author">
        <span class="name">Summer</span>
      </div>
      <span class="feed-label">HaHa</span>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: 'feed-section',
    data () {
      return {
        myData: []
      }
    },
    mounted: function () {
//      console.log('22')
//      this.show()
    },
    methods: {
    }
  }
</script>

<style scoped>
  .feed-section .feed-item {
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 0.9rem;
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
