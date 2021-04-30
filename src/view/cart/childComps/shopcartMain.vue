<template>
  <div class="shopcartMain" v-if="carList.length > 0">
    <ul class="scUl">
      <li id="scLi" v-for="(item, index) in carList" :key="index">
        <div class="leftRadio">
          <form action="">
            <input
              type="checkbox"
              :id="index"
              :value="index"
              v-model="checkedNames"
            />
          </form>
        </div>
        <div class="scLiMain">
          <div class="leftImg">
            <img :src="item.img" alt="" />
          </div>
          <div class="rightInfo">
            <p>{{ checkedNames }}</p>
            <!-- <p>{{ $store.state.cheSelectAll }}</p> -->
            <h4>{{ item.title }}</h4>
            <span> ￥{{ item.price }} * {{ value(index) }} </span>
            <p>
              金额:
              {{ (value1 = value(index) * item.price) }}元
            </p>
            <div class="doubleBtn">
              <button @click="increment(index)" :disabled="flag1">-</button>
              <input type="number" min="1" max="1000" :value="value(index)" />
              <button @click="decrement(index)" :disabled="flag2">+</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from "./eventBus";
export default {
  name: "shopcartMain",
  mounted() {},
  updated() {},
  data() {
    return {
      // value: this.value,
      carList: this.$store.state.carList,
      flag1: false,
      flag2: false,
      // checked: false,
      checkedNames: []
      // objData: {}
      // allSelLength: 0
    };
  },
  methods: {
    // 全选状态
    flag() {}
  },
  // increment(index) {
  //   let sum = this.$store.state.objList[index].sum;
  //   if (sum <= 1) {
  //     this.flag = true;
  //   } else {
  //     this.$store.commit("inCrement", index);
  //   }
  // },
  // decrement(index) {
  //   let sum = this.$store.state.objList[index].sum;
  //   if (sum > 100) {
  //     this.flag = true;
  //   } else {
  //     this.$store.commit("deCrement", index);
  //   }
  // },

  computed: {
    objData() {
      // console.log(this);
      return this.$store.state.objList;
    },
    value(newV) {
      return function(index) {
        // console.log(newV, "---", index);
        return this.$store.state.objList[index].sum;
      };
    },
    checkedAttr() {
      return this.$store.state.objList;
    }
    // iid() {
    //   return this.$store.state
    // }
  },
  watch: {
    // 单选触发时判断长度，是否启动全选
    checkedNames() {
      // console.log(newV);
      console.log("单选出发啦啦啦 啊了");
      if (this.checkedNames.length === this.$store.state.objList.length) {
        console.log("长度一样了");
        this.$store.commit("allSelState", true);
      } else {
        console.log("不等于哦");
        this.$store.commit("allSelState", false);
      }
    },
    // VUEX选中与否的状态已经改变,监听返回

    objData: {
      handler(newV, oldV) {
        console.log("handler", newV, oldV);
      },
      deep: true,
      immediate: true
    },

    // checked(newV) {
    //   if (newV) {
    //     console.log(this.value1);
    //     EventBus.$emit("changePrice", this.value1);
    //   } else {
    //     EventBus.$emit("changePrice", 0);
    //   }
    // },
    value1(newV, oldV) {
      if (this.checked) {
        this.$store.commit("childCheck", newV);
      }
    },
    "$store.state.obj": {
      handler(oldVal, newVal) {
        console.log(oldVal);
        console.log(newVal);
      },
      deep: true
    },
    shopInfo(newV, oldV) {
      console.log(newV, oldV);
      return newV;
    }
  }
  // props: ["shopInfo"]
  // beforeMount() {
  //   this.objData = this.$store.state.obj;
  //   // console.log(objData);
  // },
  // activated() {
  //   this.objData = this.$store.state.obj;
  //   // console.log(objData);
  // }
};
</script>

<style scoped lang="less">
.shopcartMain {
  // height: 100px;
  margin: 44px 20px;
  background-color: orange;
}
.scUl {
  display: flex;
  // margin: 44px 20px;
  // text-align: center;
  flex-wrap: wrap;
  border: 1px solid rebeccapurple;
  #scLi {
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid rebeccapurple;
    // height: 100px;
  }
}
.leftRadio {
  // width: 50px;

  line-height: 200px;
  text-align: center;
  border: 1px solid green;
  form {
    width: 30px;
  }
}
.scLiMain {
  position: relative;
  display: flex;
  margin: 10px 8px;
  h4 {
    margin-bottom: 70px;
  }
  span {
    margin-left: 40px;
    color: red;
    font-size: 20px;
  }
  img {
    height: 200px;
  }
  .doubleBtn {
    position: absolute;
    right: 30px;
    bottom: 30px;
    // width: 100px;
    input {
      width: 30px;
    }
  }
}
</style>
