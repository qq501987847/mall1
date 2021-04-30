<template>
  <div class="category-nav-bar">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <h2>商品分类</h2>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "categoryNavbar",
  components: {
    NavBar
  }
};
</script>

<style scoped lang="less">
.category-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  height: 44px;
  width: 100%;
  // border: 1px solid red;
  background-color: var(--primary-bg-color);
  h2 {
    margin: 0;
    height: inherit;
    color: #fff;
  }
}
</style>
