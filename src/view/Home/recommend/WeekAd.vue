<template>
  <div class="weekAd">
    <slot name="weekad">
      <a href="#">
        <img src="~assets/images/weekad.png" alt="">
      </a>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'WeekAd'

}

</script>

<style scoped lang="less">
.weekAd {
  img {
    width: 100%;
  }
}
</style>
