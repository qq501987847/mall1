<template>
  <div id="maintabbar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon
          ><img src="~tabbar/home.svg" alt=""
        /></template>
        <template v-slot:item-icon-active
          ><img src="~tabbar/home-active.svg" alt=""
        /></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon
          ><img src="~tabbar/category.svg" alt=""
        /></template>
        <template v-slot:item-icon-active
          ><img src="~tabbar/category-active.svg" alt=""
        /></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <template v-slot:item-icon
          ><img src="~tabbar/shopcart.svg" alt=""
        /></template>
        <template v-slot:item-icon-active
          ><img src="~tabbar/shopcart-active.svg" alt=""
        /></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon
          ><img src="~tabbar/profile.svg" alt=""
        /></template>
        <template v-slot:item-icon-active
          ><img src="~tabbar/profile-active.svg" alt=""
        /></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTarBar",
  components: {
    TabBar,
    TabBarItem
  },
  
};
</script>

<style scoped lang="less">
#maintabbar {
  /* 定位 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
}
</style>
