<template>
  <div class="goodsItem" @click="inDetail">
    <slot name="img"></slot>
    <slot name="title"></slot>
    <slot name="price"></slot>
    <slot name="sale"></slot>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {
      iid: null
    };
  },
  props: ["goods"],
  methods: {
    inDetail() {
      // console.log(this.goods.iid);
      this.iid = this.goods.iid;
      this.$router.push("/Detail/" + this.iid);
    }
  }
};
</script>

<style scoped lang="less">
// .goodsItem {
//   width: 50%;
// }
</style>
