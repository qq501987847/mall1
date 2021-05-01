<template>
  <keep-alive>
    <div id="home" ref="home">
      <nav-bar class="home-nav">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <!-- 轮播图 -->
      <home-swiper :banners="banners"> </home-swiper>
      <!-- 推荐信息 -->
      <recom> </recom>
      <!-- 1周推荐 -->
      <week-ad> </week-ad>
      <!-- tab栏 -->
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list
        class="shop-ul"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="0"
        :goods="showGoods"
      ></goods-list>
      <!-- <goods-list> </goods-list> -->
      <p id="loading" ref="loading">Loading·····</p>
      <back-top ref="backTop" v-show="backTopShow"></back-top>
    </div>
  </keep-alive>
</template>

<script>
// 导入推荐导航
import Recom from "./recommend/Recom";
// 导入推荐信息广告
import WeekAd from "./recommend/WeekAd";
// 导入轮播图
import HomeSwiper from "../../components/common/swiper/Swiper";

// import { Swiper1, SwiperItem } from 'components/common/swiper/index'
// 导入推荐导航栏
import NavBar from "components/common/navbar/NavBar";
// 导入返回顶部按钮
import BackTop from "../common/BackTop";
// 导入商品列表导航栏
import TabControl from "components/content/tabControl/TabControl";
// 导入商品列表
import GoodsList from "components/content/goods/GoodsList";
// import GoodsList from 'components/content/goods/GoodsList'
// 导入API数据接口请求商品data
import { getHomeGoods, getHomeMultiData } from "network/home";
// import { getHomeMultiData } from 'network/home'

export default {
  name: "Home",
  components: {
    Recom,
    WeekAd,
    NavBar,
    HomeSwiper,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banners: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      which: "pop",
      busy: false,
      backTopShow: false,
      docOffsetY: ""
    };
  },
  activated() {
    // keep-alive 组件激活时使用
    // console.log("激活");
    this.busy = false;
  },
  deactivated() {
    // console.log("失活");

    this.busy = true;
  },
  methods: {
    // 事件监听相关的方法

    // window页面滚动事件，不是home的
    DocScroll() {
      // 获取home的滚动距离
      // console.log(this);
      // 获取doc滚动距离，从VUEX获取document元素
      const docSY = this.$store.state.docEle.documentElement;
      // console.log(docSY.scrollTop, "---", docOffsetY);
      if (docSY.scrollTop >= this.docOffsetY) {
        //滚动到大于这个距离，就显示backtop
        this.backTopShow = true;
      } else {
        this.backTopShow = false;
      }
    },
    tabClick(_index) {
      switch (_index) {
        case 0:
          this.which = "pop";
          // this.goods.pop.page = 0;
          break;
        case 1:
          this.which = "new";
          break;
        case 2:
          this.which = "sell";
          break;
        default:
          this.which = "pop";
      }
    },

    // 轮动懒加载
    // 当滚动到底部，调用该方法
    loadMore() {
      this.busy = true;
      // 再次发送请求API数据
      setTimeout(() => {
        getHomeGoods(this.which, ++this.goods[this.which].page).then(
          response => {
            console.log(response.data);
            this.goods[this.which].list.push(...response.data.data.list);
            // console.log(this.showGoods);
            // console.log("------------------");
            // console.log(this.goods[this.which].page);
            this.busy = false;
          },
          500
        );
      });
    }
  },
  computed: {
    // 计算商品列表
    showGoods() {
      return this.goods[this.which].list;
    }
  },
  created() {
    getHomeMultiData().then(resolve => {
      this.banners = resolve.data.data.banner.list;
    });
  },
  mounted() {
    // console.log(ownnerDocument);
    // 挂载的时候把VUEX的document元素添加一个事件
    // const ownDoc = this.$store.state.docEle;
    window.addEventListener("scroll", this.DocScroll, true);
    // 挂载渲染的时候才可以获取
    this.docOffsetY = this.$refs.loading.offsetTop / 2;
  }
};
</script>

<style scoped lang="less">
#home {
  margin-top: 44px;
  // width: 100%;
  // height: 100vh;
  // overflow-y: auto;
}
.home-nav {
  color: #fff;
  font-size: 25px;
  letter-spacing: 20px;
  font-weight: 700;
  background-color: var(--primary-bg-color);

  // 定位
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

// loading的样式
#loading {
  // height: 20px;
  color: var(--primary-bg-color);
  text-align: center;
  margin-bottom: 60px;
}
// 返回顶部按钮
.backTop {
  // display: none;
  position: fixed;
  right: 0;
  bottom: 120px;
  z-index: 999;
}
</style>
