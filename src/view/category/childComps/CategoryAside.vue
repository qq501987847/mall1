<template>
  <div class="category-aside" v-if="flag">
    <ul class="categoryLeftNav" v-trigger>
      <li
        @click="add(item.maitKey, index)"
        :class="{ categoryLi: true, active: liCurrent === index }"
        v-for="(item, index) in categoryList"
        :key="index"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoryAside",
  data() {
    return {
      flag: false,
      liCurrent: 0,
      aaa: Number
    };
  },
  props: ["categoryList"],
  watch: {
    categoryList(newV, oldV) {
      this.flag = true;
      this.aaa = newV[0].maitKey;
      return newV;
    }
  },
  methods: {
    add(maitKey, index) {
      this.$emit("transferKey", maitKey);
      this.$store.commit("transferKey", maitKey);
      console.log("aside", maitKey);
      this.liCurrent = index;
    }
  },
  mounted() {
    if (this.aaa > 0) {
      this.add(this.aaa, this.liCurrent);
      console.log(this.aaa, "judge");
      console.log("aaa");
    }
  },
  // 自定义指令，让组件挂载点击一次
  directives: {
    trigger: {
      bind: function(el, binding, vnode) {
        el.children[0].click();
      }
    }
  }
};
</script>

<style scoped lang="less">
.categoryLeftNav {
  position: fixed;
  left: 0;
  top: 44px;

  width: 150px;
  height: 100%;
  // border: 1px solid red;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  overflow-y: auto;

  .categoryLi {
    line-height: 50px;
    // border-radius: 10px;
    padding: 5px 10px;
    background-color: rgb(244, 244, 244);
  }
  .categoryLi:hover {
    background-color: var(--primary-bg-color);
  }
  .active {
    background-color: var(--primary-bg-color);
  }
}
</style>
