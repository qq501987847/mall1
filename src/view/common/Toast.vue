<template>
  <div class="Toast" v-if="showToast">
    <h2>{{message}}</h2>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
        message:'hello Toast!',
        showToast: true
        
    };
  },
  components: {},
  activated() {}
};
</script>
<style lang="less" scoped>
.Toast {
  position: fixed;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  // transform: translateY(-50%);
  z-index: 999999999;
  border-radius: 20px;
  padding:10px 20px;
  background-color: grey;
  animation: anima 2s;
}
@keyframes anima {
  from {
    // display: block;
    opacity:1
  }
  to {
    opacity: 0;
    // display: none
  }
}
</style>
