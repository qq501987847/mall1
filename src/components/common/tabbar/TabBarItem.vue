<template>
  <div
    id="tab-bar-item"
    @click="barIsActive"
    :style="{ 'background-color': activeBgColor }"
  >
    <div class="icon" v-if="!isActive">
      <slot :class="img" name="item-icon"></slot>
    </div>
    <div class="active-icon" v-else><slot name="item-icon-active"></slot></div>
    <div class="text" :style="{ color: activeColor }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true
    }
  },

  computed: {
    isActive() {
      // console.log(this.$route.path);
      // console.log("下面出场的是vuex的数据");
      // console.log(this.$store.state.isActivePath);
      return this.$route.path === this.path;
    },
    activeColor() {
      return this.isActive ? "#fff" : "";
    },
    activeBgColor() {
      return this.isActive ? "#409EFF" : "rgb(198, 226, 255)";
    }
  },

  methods: {
    barIsActive() {
      this.$router.replace(this.path);
      window.document.title = this.$route.meta.title;
    }
  },
  watch: {
    $route: function(to, from) {
      console.log(to);
      console.log("我是哪個路由");
    }
  }
};
</script>

<style scoped lang="less">
#tab-bar-item {
  flex: 1;
  text-align: center;
  background-color: rgb(198, 226, 255);
  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
}
</style>
