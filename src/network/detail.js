import {request} from './request'


// 详情页相关数据
export function getDetailData (pas) {
  return request({
    url: `/detail?iid=${pas}`
  })
}
// 底部推荐
export function getRecommend() {
  return request({
    url:'/recommend'
  })
}
