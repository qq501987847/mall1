<template>
  <div class="SwiperItem">
    <img :src="item.image || item" alt="" :class="classObj" />
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  props: ["item"],
  data() {
    return {
      detailActive: true,
      homeActive: true
    };
  },
  computed: {
    classObj() {
      return {
        detailItem: this.item.image || this.detailActive,
        homeItem: this.item.image && this.homeActive
      };
    }
  }
};
</script>

<style scoped lang="less">
.SwiperItem {
  // float: left;
  height: inherit;
  // width: 25%;
  .detailItem {
    width: 100%;
    // height: 70%;
    // height: inherit;
    // border-radius: 10px;
  }
  .homeItem {
    width: 100%;
    height: inherit;
    // vertical-align: bottom;
  }
}
</style>
