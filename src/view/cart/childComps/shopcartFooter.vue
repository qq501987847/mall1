<template>
  <footer class="shopcart-footer">
    <nav-bar>
      <template #left>
        <form class="form">
          <label for="allSel">全选 </label>
          <input
            type="checkbox"
            @change="changeAllSel"
            id="allSel"
            v-model="AllSel"
          />
        </form>
      </template>
      <template #right>
        <span class="total">合计 : </span
        ><span class="allPrice">{{ totalPrice }}</span
        ><button class="submitOrder">提交订单</button>
      </template>
    </nav-bar>
  </footer>
</template>

<script>
// import { EventBus } from "./eventBus";
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "shopcartFooter",
  data() {
    return {
      checked: ""
    };
  },
  components: {
    NavBar
  },
  methods: {
    changeAllSel() {
      // 全选提交给VUEX
      // if(this.$store.state.CarList)
    }
  },
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    AllSel() {
      return this.$store.getters.AllSel;
    }
  },
  watch: {}
};
</script>

<style scoped lang="less">
.shopcart-footer {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 50px;
  padding: 3px;
  background-color: #fff;
  // border: 1px solid rebeccapurple;
}
/deep/ .left {
  margin-left: 10px;
  // height: 50px;
}
/deep/ .right {
  width: 350px;
  display: flex;
  // padding: 3px;
  .total {
    flex: 1;
  }
  .allPrice {
    color: red;
    flex: 1;
  }
  .submitOrder {
    border-radius: 16px;
    flex: 3;
    // padding: 8px 34px;
    // line-height: 80%;
    height: 80%;
    border: 0;
    // align-self: center;
    margin: auto 20px;
    // padding: 5px;
    font-size: 15px;
    color: #fff;
    background: linear-gradient(to right, #fe5c33, 70%, #ef0f25);
  }
}
</style>
