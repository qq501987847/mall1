<template>
  <div class="shopcart">
    <shopcartHeader></shopcartHeader>
    <shopcartEmpty v-if="flag"></shopcartEmpty>
    <shopcartMain v-else></shopcartMain>
    <shopcartFooter></shopcartFooter>
  </div>
</template>

<script>
import shopcartHeader from "./childComps/shopcartHeader";
import shopcartFooter from "./childComps/shopcartFooter";
import shopcartEmpty from "./childComps/shopcartEmpty";
import shopcartMain from "./childComps/shopcartMain";

export default {
  name: "shopcart",
  data() {
    return {
      // flag: true
    };
  },
  computed: {
    flag() {
      return this.$store.state.carList.length ? false : true;
    }
  },
  components: {
    shopcartHeader,
    shopcartFooter,
    shopcartEmpty,
    shopcartMain
  }
};
</script>

<style scoped>
.shopcart {
  height: 100%;
  background-color: #f2f2f2;
}
</style>
