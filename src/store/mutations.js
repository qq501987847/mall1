export default {

  addCart(state, payload) {
    // console.log('我是payload')
    state.carList.push(payload)

    // console.log(state.carList, '我是VUEX商品列表')
  },
  addCount(state, item) {
    item.count++
    // console.log("+++++")
  },
  // 获取document元素保存起来
  getDoc(state, doc) {
    state.docEle = doc
  },
  // 获取哪个maitkey
  transferKey(state, maitKey) {
    state.maitKey = maitKey
    // console.log(state.maitKey, maitKey)
  },
  // 接收商品删除改变状态
  isItemCheck(state, index) {
    state.carList.splice(index, 1)
  },
  // 点击全选让单选都跟着变
  allsel(state, flag) {
    state.carList.forEach(element => {
      element.isCheck = flag
      // console.log(element.isCheck,flag)
    });
  },
  // 改变路由样式
  changeIsActive(state, path) {
    state.isActivePath = path
  }
}
