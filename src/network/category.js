import { request } from './request'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubCategory(value) {
  return request({
    url: `/subcategory?maitKey=${value}`
  })
}
