<template>
  <header class="shopcart-header">
    <nav-bar>
      <template #left>
        <div @click="backDetail">
          <svg
            t="1619507379740"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2346"
            width="20"
            height="20"
          >
            <path
              d="M441.12 142.0416c9.3728 9.3728 9.3728 24.568 0 33.9408L116.8768 500.2256c-6.5024 6.5024-6.5024 17.0464 0 23.5488L441.12 848.0176c9.3728 9.3728 9.3728 24.568 0 33.9408-9.3728 9.3728-24.568 9.3728-33.9408 0L82.936 557.7152c-25.248-25.248-25.248-66.1824 0-91.4304L407.1792 142.0416c9.3728-9.3728 24.568-9.3728 33.9408 0zM432 464c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z m480 0c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z m-320 0c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z m160 0c26.5104 0 48 21.4896 48 48 0 26.5104-21.4896 48-48 48-26.5104 0-48-21.4896-48-48 0-26.5104 21.4896-48 48-48z"
              fill="#fff"
              p-id="2347"
            ></path>
          </svg>
        </div>
      </template>
      <template #center>
        <h2>购物车</h2>
      </template>
    </nav-bar>
  </header>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "shopcartHeader",
  components: {
    NavBar
  },
  methods: {
    backDetail() {
      this.$router.go(-1);
      // this.$store.commit("changeMainTabBar", false);
      // console.log(1111);
    }
  }
};
</script>

<style scoped>
.shopcart-header {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: var(--primary-bg-color);
}
.left {
  /* line-height: 44px; */
}
.icon {
  /* display: block;
  margin: auto 0; */
  vertical-align: middle;
  /* color: #fff; */
}
h2 {
  height: 100%;
  margin: 0;
  padding: 0;
  color: #fff;
}
</style>
