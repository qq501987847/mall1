<template>
  <div class="DetailInfoImg" v-if="flag">
    <p class="description">
      {{ detailInfo.desc }}
    </p>
    <ul class="ulImgs">
      <li v-for="(item, index) in detailInfo.detailImage[0].list">
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailInfoImg",
  props: ["detailInfo"],
  data() {
    return {
      flag: false
    };
  },
  watch: {
    detailInfo(newV, oldV) {
      this.flag = true;

      return newV;
    }
  }
};
</script>

<style scoped lang="less">
.description {
  position: relative;
  min-height: 60px;
  border: 1px dotted var(--primary-bg-color);
  margin: 20px 20px;
  padding: 20px 20px;
  text-indent: 2em;
}
.description::before {
  position: absolute;
  left: -5px;
  top: -5px;
  content: "";
  display: inline-block;
  width: 100px;
  height: 40px;
  border-top: 10px solid var(--primary-bg-color);
  border-left: 10px solid var(--primary-bg-color);
}
.description::after {
  position: absolute;
  right: -5px;
  bottom: -5px;
  content: "";
  display: inline-block;
  width: 100px;
  height: 40px;
  border-right: 10px solid var(--primary-bg-color);
  border-bottom: 10px solid var(--primary-bg-color);
}
.ulImgs {
  // width: 100%;
  img {
    width: 100%;
  }
}
</style>
