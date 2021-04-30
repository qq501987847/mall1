<template>
  <div class="category-main" v-if="flag">
    <ul class="subUl">
      <li class="subLi" v-for="(item, index) in subcategoryList" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryMain",
  data() {
    return {
      flag: false
    };
  },
  props: ["subcategoryList"],
  watch: {
    subcategoryList(newV, oldV) {
      this.flag = true;
      return newV;
    }
  }
};
</script>

<style scoped lang="less">
.category-main {
  position: absolute;
  right: 0;
  top: 44px;
  // top: 44px;
  // display: flex;
  // border: 1px solid red;
  // height: 100%;
  width: 70%;
  .subUl {
    // overflow: hidden;
    display: flex;
    height: 100%;
    text-align: center;
    flex-wrap: wrap;
    // background-color: orange;
  }
  .subLi {
    width: 48%;
    box-sizing: border-box;
    padding: 0 5px;
    img {
      // margin: 0 10px;
      width: 100%;
    }
    p {
      width: 100%;
    }
  }
}
</style>
