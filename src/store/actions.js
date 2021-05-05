export default {


  addCar(context, product) {
    // console.log('action', context, product)
    // 创建一个空对象用来接收，避免每次都进入循环
    let item = null
    // console.log(state, payload)
    for (let i of context.state.carList) {
      if (product.iid === i.iid) {
        item = i
      }
    }
    // console.log('我是null前', item)
    if (item) {
      // console.log('我是Null')
      context.commit('addCount', item)
    } else {
      product.count = 1;
      product.isCheck = true
      // console.log('我能进来吗')
      context.commit('addCart', product)
    }
  }
}
