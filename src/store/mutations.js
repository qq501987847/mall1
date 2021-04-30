export default {

  addCart(state, payload) {
    console.log('我是payload')
    state.carList.push(payload)

    console.log(state.carList, '我是VUEX商品列表')
  },
  addCount(state, item) {
    item.count++
    console.log("+++++")
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
}