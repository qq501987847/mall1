import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import actions from './actions'
import mutations from './mutations'
export default new Vuex.Store({
  state: {
    // shopIndex: 0,
    // reLoading: false,
    docEle: null,
    maitKey: Number,
    // i: 0,
    carList: [],
    // AllSel: false,
    totalPrice: 0,
    isActive: ''
  },
  actions,
  mutations,
  getters: {
    totalPrice: state => {
      let AllTotal = 0
      state.carList.forEach((item) => {
        if (item.isCheck) {
          AllTotal += item.count * item.price
        }
        console.log(AllTotal)
      })
      return AllTotal.toFixed(2)
    },
    // 计算是否全选
    AllSel(state) {
      let flag = ''
      state.carList.forEach(item => {
        if (item.isCheck === false) {
          flag = false
          console.log('出现false')
        } else {
          flag = true
          console.log('出现true')

        }
      })
      return flag
    }

  },

  // mutations: {
  //   // 点击减少特定index商品数量
  //   inCrement(state, index) {
  //     state.CarList[index].sum--
  //   },
  //   // 点击增加特定index商品数量
  //   deCrement(state, index) {
  //     state.CarList[index].sum++
  //   },
  //   changeShopIndex(state, index, loading) {
  //     state.shopIndex = index
  //     state.reLoading = loading
  //   },



  //   // 如果选中，接收该商品的总价
  //   childCheck(state, newV) {

  //     state.totalPrice += newV
  //   },

  //   // 是否全选
  //   selectAll(state, flag) {
  //     state.cheSelectAll = !state.cheSelectAll
  //     console.log('提交了')
  //     // 全选的时候把各个商品都选中
  //     for (let i = 0; i < state.CarList.length; i++) {
  //       console.log('进来了')
  //       state.CarList[i].ischeck = !state.CarList[i].ischeck
  //     }
  //     // console.log(state.cheSelectAll)
  //     // console.log(flag)
  //   },
  //   // 如果有单选选中，就判断全选状态
  //   allSelState(state) {
  //     this.selectAll()
  //   },

  //   // 购物车总数
  //   incrementItem(state, payload) {

  //     let ListLength = state.CarList.length
  //     // let sum = payload.sum
  //     if (ListLength === 0) {
  //       state.CarList.push(payload)
  //       // return
  //     } else {
  //       // console.log('进入else--长度大于0')
  //       // let option = { iid: payload.iid }
  //       let result = state.CarList.some(function (item, index) {
  //         if (item.iid == payload.iid) {
  //           this[index].sum++
  //           // console.log('this是谁---', this)
  //           return true
  //         }
  //       }, state.CarList)
  //       if (result) {
  //         // console.log('里面有这个iid了')
  //       } else {
  //         // console.log('false ,里面没有找到这个iid，push进去')
  //         state.CarList.push(payload)
  //       }
  //       // 循环里面没有一样的iid的话
  //     }
  //   }


  // },

  modules: {
  }
})
