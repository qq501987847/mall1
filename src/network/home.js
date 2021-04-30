import { request } from './request'

export function getHomeMultiData () {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods (name, n) {
  return request({
    url: `/home/data?type=${name}&page=${n}`
  })
}


