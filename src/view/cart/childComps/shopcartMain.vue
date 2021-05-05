<template>
  <div class="shopcartMain" v-if="$store.state.carList.length > 0">
    <ul class="scUl">
      <li id="scLi" ref="li" v-for="(item, index) in carList" :key="index">
        <button class="removeItem" @click="removeItem(index, $event)">
          移除
        </button>
        <div class="leftRadio">
          <form action="">
            <input
              type="checkbox"
              :id="index"
              :value="index"
              v-model="item.isCheck"
            />
          </form>
        </div>
        <div class="scLiMain">
          <div class="leftImg">
            <img :src="item.img" alt="" />
          </div>
          <div class="rightInfo">
            <h4>{{ item.title }}</h4>
            <span> ￥{{ item.price }} * {{ item.count }} </span>
            <p>
              金额:
              {{ (item.count * item.price).toFixed(2) }}元
            </p>
            <div class="doubleBtn">
              <button
                @click="item.count < 2 ? '' : item.count--"
                :disabled="item.count < 2 ? true : false"
              >
                -
              </button>
              <input type="number" min="1" max="1000" v-model="item.count" />
              <button
                @click="item.count >= 200 ? '' : item.count++"
                :disabled="item.count >= 200 ? true : false"
              >
                +
              </button>
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
      carList: this.$store.state.carList
    };
  },
  methods: {
    removeItem(index, e) {
      this.$store.commit("isItemCheck", index);
    }
  },
  
};
</script>

<style scoped lang="less">
.shopcartMain {
  // height: 100px;
  margin: 44px 20px 80px;
  
  // background-color: orange;
  // background-color: #fff;

}
.scUl {
  display: flex;
  // margin: 44px 20px;
  // text-align: center;
  flex-wrap: wrap;
  // border: 1px solid rebeccapurple;
  #scLi {
    position: relative;
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px dashed rebeccapurple;
    .removeItem {
      position: absolute;
      right: 4px;
      top: 4px;
      z-index: 99999;

      color: red;
      background-color: #fff;
      border: 1px solid #000;
    }
    // height: 100px;
  }
}
.leftRadio {
  // width: 50px;

  line-height: 200px;
  text-align: center;
  // border: 1px solid green;
  form {
    width: 30px;
  }
}
.scLiMain {
  position: relative;
  display: flex;
  margin: 10px 8px;

  h4 {
    padding-left: 20px;
    margin-bottom: 50px;
  }
  span {
    margin-left: 20px;
    color: red;
    font-size: 20px;
  }
  p {
    padding-left:20px;
  }
  img {
    height: 200px;
    // min-height: 100px;
  }
  .doubleBtn {
    position: absolute;
    right: 5px;
    bottom: 10px;
    // width: 100px;
    input {
      width: 30px;
    }
  }
}
</style>
