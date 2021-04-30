<template>
  <div class="detail-swiper">
    <swiper :banners="banners" id="swiper"></swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  props: ["banners"],
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped lang="less">
#swiper {
  height: 400px;
}
</style>
