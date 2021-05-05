<template>
  <div class="detail-comment" v-if="flag">
    <div class="user" v-for="(item, index) in rate.list" :key="index">
      <div class="userInfo">
        <img :src="item.user.avatar" alt="" />
        <div>
          <h2>{{ item.user.uname }}</h2>
          <span>{{ item.created | initDate }}</span> |
          <span>{{ item.style }}</span>
        </div>
        <!-- <span>{{ item.extraInfo[0] }}</span> -->
      </div>
      <p class="content">{{ item.content }}</p>
      <p class="explain">{{ item.explain }}</p>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../../utils/index";
export default {
  name: "DetailComment",
  props: ["rate"],
  data() {
    return {
      flag: false
    };
  },
  filters: {
    initDate(time) {
      var date = new Date(time * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  watch: {
    rate(newV, oldV) {
      this.flag = true;

      return newV;
    }
  }
};
</script>

<style scoped lang="less">
.user {
  display: flex;
  flex-wrap: wrap;
  // border: 1px solid orange;
  .userInfo {
    // border: 1px solid orangered;
    width: 100%;
    margin-top: 20px;
    margin-left: 20px;
    height: 100px;
    // line-height: 100px;
    // display: flex;
    div {
      display: inline-block;
      height: 100px;
      margin-left: 20px;
      // margin-bottom: 10px;
      // padding-bottom: 10px;
    }
    
    span {
      display: inline-block;
      color: grey;
    }
  }
  img {
    // display: block;
    width: 100px;
    height: inherit;
    border-radius: 50%;
    // vertical-align: middle;
  }
  .content,
  .explain {
    margin: 10px 40px;
    // text-indent: 2em;
  }
  .explain {
    color: grey;
  }
}
</style>
