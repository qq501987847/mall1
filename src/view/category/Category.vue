<template>
  <div class="category">
    <header>
      <category-navbar></category-navbar>
      <category-aside
        @transferKey="getData"
        :categoryList="categoryList"
      ></category-aside>
      <category-main :subcategoryList="subcategoryList"></category-main>
    </header>
  </div>
</template>

<script>
import CategoryNavbar from "./childComps/CategoryNavbar";
import CategoryAside from "./childComps/CategoryAside";
import CategoryMain from "./childComps/CategoryMain";
// 导入HTTP请求
import { getCategory, getSubCategory } from "network/category";
export default {
  name: "category",
  data() {
    return {
      categoryList: [],
      val: Number,
      subcategoryList: []
    };
  },
  components: {
    CategoryNavbar,
    CategoryAside,
    CategoryMain
  },
  methods: {
    getData(val) {
      this.val = val;
      console.log("1111", val);
    }
  },
  created() {
    getCategory().then(data => {
      // console.log(data);
      // 把列表数据标题取出
      this.categoryList = data.data.data.category.list;
      // console.log(this.categoryList);
    });
    // getSubCategory(val)
    //   .then(data => {
    //     console.log(data);
    //     console.log(this.$store.state.maitKey);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  watch: {
    val(newV, oldV) {
      console.log(newV, oldV);
      getSubCategory(newV)
        .then(data => {
          console.log(data.data.data.list);
          this.subcategoryList = data.data.data.list;
          // console.log(this.$store.state.maitKey);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.category {
  overflow-x: hidden;
}
</style>
