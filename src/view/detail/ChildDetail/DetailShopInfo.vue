<template>
  <div class="detail-shop-info" v-if="flag">
    <!-- 店铺logo 名字 -->
    <div class="shopLogo">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <!-- 宝贝数量 -->
    <div class="shopCount">
      <div class="cSells">
        <span>{{ shopInfo.cSells }}</span
        ><span>销售量</span>
      </div>
      <div class="cFans">
        <span>{{ shopInfo.cFans }}</span
        ><span>粉丝数</span>
      </div>
      <div class="score">
        <div v-for="(score, index) in shopInfo.score" :key="index">
          <span class="scoreName">{{ score.name }}</span>
          <span
            class="scoreScore"
            :class="{ textGreen: !score.isBetter, textRed: score.isBetter }"
            >{{ score.score }}</span
          >
          <span
            class="scoreBetter"
            :class="{ green: !score.isBetter, red: score.isBetter }"
            >{{ score.isBetter ? "高" : "低" }}
          </span>
        </div>
      </div>
    </div>
    <div class="inshop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: ["shopInfo"],
  data() {
    return {
      lighLow: true,
      flag: false
    };
  },
  computed: {},
  watch: {
    shopInfo(newV, oldV) {
      console.log("info子听----------", newV);
      // this.lighLow = true
      this.flag = true;
      return newV;
    }
  }
};
</script>

<style scoped lang="less">
.detail-shop-info {
  height: 390px;
  border-bottom: 3px solid #f0f0ef;
  .shopLogo {
    display: flex;
    // height: 130px;
    line-height: 130px;
    vertical-align: middle;
    // border: 1px solid red;
    font-size: 25px;
    color: grey;
    img {
      height: 100px;
      border-radius: 50%;
      border: 1px solid rgb(207, 206, 206);
      margin: auto 30px;
    }
  }
  .shopCount {
    display: flex;
    height: 130px;
    // border: 1px solid blueviolet;
    .cSells,
    .cFans {
      flex: 1;
      text-align: center;
      height: 65px;
      font-weight: 700;
      font-size: 20px;
      // line-height: 65px;
      margin: auto 0;
      span {
        // height: 50%;
        padding-top: 10px;
        // line-height: 100%;

        display: block;
      }
    }
    .cFans {
      border-right: 2px solid rgb(214, 212, 212);
    }

    .score {
      // border: 1px solid orangered;
      flex: 2;
      display: flex;
      flex-flow: column nowrap;
      padding-left: 50px;
      justify-content: space-around;
      text-align: center;
      // align-items: space-around;
      span {
        // margin-right: 40px;
        display: inline-block;
        width: 80px;
        font-size: 20px;
        // justify-content: space-around;
        // margin: auto 0;
        // height: 33.33%;
      }
      .scoreBetter {
        width: 25px;
        margin-left: 20px;
        color: #fff;
        // background-color: red;
      }
    }
  }
  .inshop {
    text-align: center;
    width: 200px;
    // height: 60px;
    line-height: 60px;
    // border: 1px solid;
    border-radius: 10px;
    margin: 20px auto;
    background-color: var(--primary-bg-color);
    font-size: 30px;
    color: #fff;
  }
}
.red {
  background-color: red;
}
.green {
  background-color: rgb(20, 150, 20);
}
.textRed {
  color: red;
}
.textGreen {
  color: rgb(20, 150, 20);
}
</style>
