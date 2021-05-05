<template>
  <div class="Detail">
    <detail-tab-nav :TabnavCurrent="TabnavCurrent"></detail-tab-nav>
    <detail-swiper id="a0" :banners="banners"></detail-swiper>
    <detail-item-info
      :itemInfo="itemInfo"
      :columns="columns"
      :services="services"
    ></detail-item-info>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <detail-info-img :detailInfo="detailInfo"></detail-info-img>
    <detail-params
      id="a1"
      ref="itemParams"
      :itemParams="itemParams"
    ></detail-params>
    <detail-comment id="a2" ref="comment" :rate="rate"></detail-comment>
    <detail-recommend id="a3" ref="recommend" :recommend="recommend"></detail-recommend>
    <detail-footer :shopcart="shopcart" @addCar="addCar"></detail-footer>
    <back-top class="backTop" v-if="backTopShow">111</back-top>
  </div>
</template>

<script>
import DetailSwiper from "./ChildDetail/DetailSwiper";
import DetailTabNav from "./ChildDetail/DetailTabNav";
import DetailItemInfo from "./ChildDetail/DetailItemInfo";
import DetailShopInfo from "./ChildDetail/DetailShopInfo";
import DetailInfoImg from "./ChildDetail/DetailInfoImg";
import DetailParams from "./ChildDetail/DetailParams";
import DetailComment from "./ChildDetail/DetailComment";
import DetailRecommend from "./ChildDetail/DetailRecommend";
import DetailFooter from "./ChildDetail/DetailFooter";
import BackTop from "view/common/BackTop";
// 引入请求方法
import { getDetailData, getRecommend } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      banners: [],
      result: {},
      shopInfo: {},
      itemInfo: {},
      columns: [],
      services: [],
      itemParams: {},
      detailInfo: {},
      rate: [],
      recommend: [],
      shopcart: {},
      backTopShow: false,
      // 滚动事件让导航栏样式跟着变化
      TabnavCurrent:0,
    };
  },
  components: {
    DetailSwiper,
    DetailTabNav,
    DetailItemInfo,
    DetailShopInfo,
    DetailInfoImg,
    DetailParams,
    DetailComment,
    DetailRecommend,
    DetailFooter,
    BackTop
  },
  // 钩子函数
  created() {
    // 创建初始化的时候把当前路由的路径iid传过去
    this.iid = this.$route.params.iid;
    getDetailData(this.iid)
      .then(resolve => {
        // console.log(resolve);
        let data = resolve.data.result;
        // 保存数据
        // 1.把数据给轮播图
        this.banners = data.itemInfo.topImages;
        // 2.把价钱数据取出等等
        this.itemInfo = data.itemInfo;
        this.columns = data.columns;
        this.services = data.shopInfo.services;
        // 3.把商店数据取出
        this.shopInfo = data.shopInfo;
        // 4.把详情图片取出
        this.detailInfo = data.detailInfo;
        // 5.把参数说明数据取出
        this.itemParams = data.itemParams;
        // 6.把评论数据取出
        this.rate = data.rate;
        // console.log(this.rate);
        // 给购物车数据
        this.shopcart = {
          img: data.itemInfo.topImages,
          priceTitle: data.itemInfo
        };
        // 进来时改变VUEX里一个状态，让底部主要导航栏隐藏
        // this.$store.commit("MainTabBar", false);
      })
      .catch(error => {
        console.log(error);
      });

    // 获取推荐商品信息数据
    getRecommend().then(data => {
      // console.log("data---", data.data.data);
      this.recommend = data.data.data.list;
      // console.log(this.recommend);
    });
    

  },
  mounted() {
    // 滚动事件
    window.addEventListener('scroll',this.handleScroll)
  },
  // 离开组件时销毁滚动事件
  beforeDestroy() {
    // console.log(this.handleScroll)
    window.removeEventListener('scroll',this.handleScroll)
  },
  

  methods: {
    handleScroll()  {
      let bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // if(bodyScrollTop >= )
      // console.log(this.$refs)
      let comment = this.$refs.comment.$el.offsetTop
      let recommend = this.$refs.recommend.$el.offsetTop
      let itemParams = this.$refs.itemParams.$el.offsetTop
      // console.log(comment,recommend,itemParams)
      // console.log(this.$refs.comment)
      if(bodyScrollTop >= itemParams) {
        this.TabnavCurrent = 1
      }
      if(bodyScrollTop >= comment) {
        this.TabnavCurrent = 2
      }
      if(bodyScrollTop >= recommend) {
        this.TabnavCurrent = 3
      }

    },
    // 接收detailfooter发过来的事件
    addCar() {
      // console.log("我detail接受到了");
      let product = {};
      product.img = this.banners[0];
      product.title = this.itemInfo.title;
      product.price = this.itemInfo.lowNowPrice;
      product.iid = this.itemInfo.iid;
      this.$store.dispatch("addCar", product);
      // console.log(product);
    }
  }
};
</script>

<style scoped>
/* body {
  overflow-y: scroll;
} */
.Detail {
  /* height: 100%; */
  overflow: hidden;
}
.backTop {
  /* display: none; */
  position: fixed;
  right: 0;
  bottom: 180px;
  z-index: 999;
}
</style>
