<template>
  <div class="tab-control">
    <slot name="tab-control">
      <div
        v-for="(item, index) in titles"
        class="tab-controlItem"
        @click="tabActive(index)"
      >
        <span :class="{ active: index === currentIndex }">{{ item }}</span>
      </div>
    </slot>
  </div>
</template>

<script>
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
      let _index = index;
      // this.$store.commit("changeShopIndex", _index, true);
      console.log(_index);
    }
  }
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
  }
}
.active {
  color: var(--primary-bg-color);
  border-bottom: 2px solid var(--primary-bg-color);
}
</style>
