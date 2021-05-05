<template>
  <div id="app">
    <keep-alive >
    <router-view v-if="$route.meta.keepAlive"> </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"> </router-view>

    <main-tab-bar v-if="$route.meta.mainTabBarShow"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "App",
  data() {
    return {
      // show: true
    };
  },
  components: {
    MainTabBar
  },
  mounted() {
    // 挂载的时候把document元素以及document的距离顶部存入VUEX
    const ownnerDocument = this.$root.$el.ownerDocument;
    this.$store.commit("getDoc", ownnerDocument);
    // this.docOffsetTop =  ownerDocument.offsetTop
  },
  computed: {},
  methods: {},
  watch: {
    $route: function(to, from) {
      // console.log("我是APP");
      // console.log("to跟from分別是", to, from);
      this.$store.commit("changeIsActive", to.path);
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
#app {
  /* height: 100vh; */
}
</style>
