<template>
  <div class="detail-commend" v-if="flag">
    <ul class="recommendUl">
      <li class="recommendLi" v-for="(item, index) in recommend" :key="index">
        <img :src="item.image" alt="" />
        <h4>{{ item.title }}</h4>
        <span class="price">{{ item.price }} </span>
        <span class="collect"> ★{{ item.cfav }}</span>
        <!-- <span>{{ recommend }}</span> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  data() {
    return {
      flag: false
    };
  },
  created() {
    console.log(this.recommend);
  },
  props: ["recommend"],
  watch: {
    recommend(newV, oldV) {
      this.flag = true;
      return newV;
    }
  }
};
</script>

<style scoped lang="less">
.recommendUl {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: space-around;
  .recommendLi {
    width: 48%;
    text-align: center;
    h4 {
      margin: 10px 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    img {
      width: 100%;
      border-radius: 10px;
    }
    .price {
      color: red;
    }
    .collect {
      margin-left: 10px;
      font-size: 20px;
    }
  }
}
</style>
