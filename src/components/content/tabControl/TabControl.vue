<template>
  <div class="tab-control">
    <slot name="tab-control">
      <a
        v-for="(item, index) in titles"
        :key="index"
        class="tab-controlItem"
        @click="tabActive(index)"
        href="#anchor"
      >
        <span :class="{ active: index === currentIndex }">{{ item }}</span>
      </a>
    </slot>
  </div>
</template>

<script>
import Bus from 'components/bus'
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    tabActive(index) {
      this.currentIndex = index;
      // 自定义事件
      this.$emit("tabClick", index);
      Bus.$emit("tabClick",index)
      let _index = index;
      // this.$store.commit("changeShopIndex", _index, true);
      console.log(_index);
    }
  },
  mounted: () => {
    // 挂载的时候各点击一次

  },
};
</script>

<style scoped lang="less">
.tab-control {
  position: sticky;
  top: 44px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
  // border: 1px solid red;
  background-color: #fff;
  .tab-controlItem {
    flex: 1;
    height: 40px;
    line-height: 40px;
    color: #000;
  }
}
.active {
  color: var(--primary-bg-color);
  border-bottom: 2px solid var(--primary-bg-color);
}
</style>
