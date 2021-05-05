<template>
  <div class="profile-main">
    <ul class="myList" @click="unfunctional">
      <li class="myListChild"><div class="wallet"><span>钱包</span><span class="moreMore">...</span></div>
      <div class="balanceOf">
        <div class="balanceOfChild">
          <span>余额 </span><span class="balanceAcount">￥0.00</span>
        </div>
        <div class="balanceOfChild">
          <span>优惠券</span><span class="balanceAcount"> 0 张</span>
        </div>
      </div>
      </li>
      <li class="myListChild"><img class="myListIcon" src="~assets/images/profile/gouwuche.png" alt="">
      <span>我的购物车</span>
      </li>
      <li class="myListChild"><img class="myListIcon" src="~assets/images/profile/myData.png" alt="">
      <span>我的收藏</span>
      
      </li>
      <li class="myListChild"><img class="myListIcon" src="~assets/images/profile/huiyuan.png" alt="">
      <span>会员特权</span>
      
      </li>
      <li class="myListChild"><img class="myListIcon" src="~assets/images/profile/xinxi.png" alt="">
      <span>我的消息</span>
      
      </li>
      <li class="myListChild"><img class="myListIcon" src="~assets/images/profile/gouwu.png" alt="">
      <span>APP</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ProfileMain",
  data() {
    return {
      show: false
    };
  },
  methods: {
    unfunctional() {
      this.$toast('很抱歉，功能还未完善')
    }
  }
};
</script>
<style lang="less" scoped>
.myList {
  border: 1px solid black;
  margin-bottom:49px;
  // height: 100%;
  .myListChild:hover {
    cursor:pointer;
    background-color: green;
    color: #fff;
  }
  .myListChild {
    line-height: 70px;
    border-bottom: 3px solid var(--primary-bg-color);
    font-size: 20px;
    font-weight: 700;
    .myListIcon {
      vertical-align:middle;
      margin:0 20px;
    }
    .wallet {
      position:relative;
      padding: 0 20px;
      font-size: 30px;
    }
    .moreMore {
      position: absolute;
      right: 40px;
    }
    .balanceOf {
      display: flex;
      text-align: center;
      line-height: 50px;
      .balanceOfChild {
        margin-left:30px;
      }
    }
    .balanceAcount {
      display: block;
    }
  }
}

</style>
