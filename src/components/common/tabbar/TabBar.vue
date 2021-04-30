<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  /* 自身样式 */
  /* width: 100%; */
  height: 49px;
  border-top: 1px solid #ccc;
  background-color: rgb(168, 165, 165);
  box-shadow: 0 -1px 2px 0px rgba(70, 149, 223, 0.411);
  /* 布局类型 */
  display: flex;
  /* text-align: center; */
}
</style>
