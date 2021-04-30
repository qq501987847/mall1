<template>
  <div class="detail-params" v-if="flag">
    <table>
      <caption>
        <h2>{{ itemParams.rule.key }}</h2>
      </caption>
      <!-- <thead></thead> -->
      <tbody class="tbody">
        <tr v-for="(item, index1) in itemParams.rule.tables[0]" :key="index1">
          <td v-for="(td, Index2) in item" :key="Index2">
            {{ td }}
          </td>
        </tr>
      </tbody>
    </table>
    <h4 class="discla">{{ itemParams.rule.disclaimer }}</h4>
    <table>
      <caption></caption>
      <!-- <thead></thead> -->
      <tbody class="tbody">
        <tr v-for="(item, index1) in itemParams.info.set" :key="index1">
          <td>{{ item.key }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: ["itemParams"],
  data() {
    return {
      flag: false
    };
  },
  watch: {
    itemParams(newV, oldV) {
      this.flag = true;

      return newV;
    }
  }
};
</script>

<style scoped lang="less">
table {
  // border: 1px solid orangered;
  width: 100%;
  // border-spacing: 0;
  border-collapse: collapse;
  text-align: center;
  tr td:first-child {
    font-size: 20px;
    font-weight: 700;
    // color: red;
  }
  tr {
    height: 50px;
  }
  td {
    // border: 1px solid;
  }
}
.discla {
  border-bottom: 1px dashed;
  padding: 0 30px;
  padding-bottom: 20px;
}
.tbody tr:nth-child(odd) {
  background-color: var(--primary-bg-color);
  opacity: 0.5;
  color: #fff;
}
.detail-params {
  border-bottom: 3px solid #f0f0ef;
}
</style>
