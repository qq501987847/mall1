<template>
  <div class="detail-item-info" v-if="flag">
    <!-- 标题 -->
    <h3 class="title">{{ itemInfo.title }}</h3>
    <!-- 价钱打折 -->
    <div class="contrastPrice">
      <span class="price">{{ itemInfo.price }}</span>
      <span class="highPrice">￥{{ itemInfo.highPrice }}</span>
      <span class="discount">{{ itemInfo.discountDesc }}</span>
    </div>
    <!-- 销量收藏快递 -->
    <div class="columns">
      <span v-for="(col, index) in columns" :key="index">{{ col }}</span>
    </div>
    <!-- 相关福利服务 -->
    <div class="services">
      <span v-for="(item, index) in services" :key="index">
        <img :src="item.icon">{{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItemInfo",
  props: ["itemInfo",'columns','services'],
  data() {
    return {
      // resultInfo
      flag: false
    };
  },

  watch: {
    itemInfo(newV, oldV) {
      // console.log("子watch监听父异步传过来的props---", newV, oldV);
      this.flag = true;
      return newV;
    }
  }
};
</script>

<style scoped lang="less">
// info组件样式
.detail-item-info {
  // height: 266px;
  border-bottom: 3px solid rgb(240, 240, 239);
  padding: 0 20px;
  .title {
    line-height: 24px;
  }
  // 价格相关
  .contrastPrice {
    display: flex;
    line-height: 50px;
  }
  .highPrice {
    // display: inline-block;
    text-decoration: line-through;
    color: grey;
    margin: 0 15px;
    // 通过padding把文字挤到下面
    padding-top: 15px;
    // vertical-align: bottom;
  }
  .price {
    font-size: 45px;
    color: red;
  }
  .discount {
    // display: inline-block;
    width: 45px;
    height: 45px;
    text-align: center;
    font-size: 20px;
    border-radius: 10px;
    color: #fff;
    // line-height: 50px;
    background: linear-gradient(to right, #f33a40, #f85857);
  }
  // 销量收藏快递
  .columns {
    display: flex;
    justify-content: space-between;

    color: grey;
    // text-align: center;
    line-height: 50px;
    // height: 50px;
    border-bottom: 1px solid rgb(230, 230, 230);
    font-size: 20px;
  }
  // 服务相关样式
  .services {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 12px;
    line-height: 85px;
    img {
      width: 14px;
    }
  }
}
</style>
