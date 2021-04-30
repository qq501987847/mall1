<template>
  <div class="recom">
    <slot name="recom">
      <div class="recomItem" v-for="info in recommends" :key="info.title">
        <img :src="info.image" alt="">
        <div>{{ info.title }}</div>
    </div>
    </slot>
  </div>
</template>

<script>
import { getHomeMultiData } from 'network/home'

export default {
  name: 'Recom',
  data () {
    return {
      recommends: []
    }
  },
  created () {
    getHomeMultiData().then(resolve => {
      this.recommends = resolve.data.data.recommend.list
    })
  },

}

</script>

<style scoped lang="less">
.recom {
  display: flex;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  .recomItem {
    width: inherit;
    img {
    width: 68px;
    height: 68px;
    margin-bottom: 6px;
  }
  }
}
</style>
