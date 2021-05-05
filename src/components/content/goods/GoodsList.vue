<template>
  <div class="goods">
    <!-- <slot name="shop-ul"> -->
      <ul class="shop-ul"  >
        <li id="shop-li" v-for="(listItem, index2) in goods" :key="index2">
          <good-list-item :goods="listItem">
            <template v-slot:img>
              <img id="shop-img" :src="listItem.show.img" alt="" />
            </template>
            <template v-slot:title
              ><p class="shop-title">{{ listItem.title }}</p></template
            >
            <template v-slot:price
              ><span class="shop-price">{{ listItem.price }}</span></template
            >
            <template v-slot:sale
              ><span class="shop-sale"> ☆{{ listItem.sale }}</span></template
            >
          </good-list-item>
        </li>
      </ul>
    <!-- </slot> -->
  </div>
</template>

<script>
import GoodListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: ["goods"],
  data() {
    return {
      // 商品列表详情
      // 商品懒加载
      // count: 0,
    };
  },
  components: {
    GoodListItem
  },
  methods: {
    // tabClick(index) {


    // }
  },
  computed: {},
  methods: {},
  created() {
    // console.log(this.goods);
    
  },
  mounted() {
    
  }
};
</script>

<style scoped lang="less">
.goods {
  width: 100%;
  // overflow-y: scroll;
  // height: 100%;
  .shop-ul {
    // width: 100%;
    padding: 0 10px;
    display: flex;
    // height: 100%;
    // overflow-y: auto;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-around;

    .goodsItem {
      // border: 1px solid red;
      width: 100%;
      // height: 100%;
    }
  }
}
#shop-li {
  // flex: auto;
  display: block;
  // border: 1px solid red;
  width: 48%;
}
.shop-title {
  width: 100%;
  margin: 3px 10px;
  // padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#shop-img {
  width: 100%;
  height: 80%;
  border-radius: 6px;

  // height: 50%;
  // border: 1px solid red;
}
.shop-price {
  color: red;
  padding-right: 20px;
}
</style>
