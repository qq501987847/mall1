<template>
  <div class="detail-tab-nav">
    <nav-bar class="home-nav">
      <!-- 左边箭头SVG -->
      <template v-slot:left>
        <div class="svg" @click="backHome">
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
              fill="var(--primary-bg-color)"
              p-id="2347"
            ></path>
          </svg>
        </div>
      </template>
      <!-- 中间锚点 -->
      <template v-slot:center>
        <div>
          <ul class="detail-tab-nav-ul">
            <li
              v-for="(item, index) in items"
              :key="index"
              @click="current(index)"
            >
              <a
                :href="'#a' + index"
                :class="{ active: currentIndex === index }"
                >{{ item }}</a
              >
            </li>
          </ul>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailTabNav",
  data() {
    return {
      items: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  props: ["TabnavCurrent"],
  components: {
    NavBar
  },
  methods: {
    backHome() {
      // 点击之后返回上一个路由路径
      this.$router.push("/home");
    },
    current(index) {
      this.currentIndex = index;
    }
  },
  watch: {
    TabnavCurrent: {
      // 监听prop的变化要加immediate,简单类型
      // 复杂类型要加个deep
      immediate: true,
      handler(newV) {
        this.current(newV)
        // console.log(newV)
      }
    }
  }
};
</script>

<style scoped lang="less">
.detail-tab-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99999999;
  background-color: #fff;
}
.svg {
  // border: 1px solid;
  .icon {
    // height: inherit;
    // width: inherit;
    // 让图片居中
    vertical-align: middle;
  }
}

.detail-tab-nav-ul {
  // flex布局
  display: flex;
  justify-content: space-around;

  // 自身样式
  margin: 0 30px;
  color: var(--primary-bg-color);
  a {
    font-size: 20px;
    color: grey;
  }
  .active {
    color: var(--primary-bg-color);
    // border: 1px solid;
  }
}
</style>
