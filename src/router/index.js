import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../view/Home/Home')
const Category = () => import('../view/category/Category')
const ShopCart = () => import('../view/cart/shopcart')
const Profile = () => import('../view/Profile/Profile')
const GoodsList = () => import('../components/content/goods/GoodsList')
const Detail = () => import('../view/detail/Detail')
const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    // component: Home,
    meta: {
      title: '首页',
      mainTabBarShow: true,
    },
    component: Home
    // components: {
    //   home: Home
    // }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类',
      mainTabBarShow: true,
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      title: '购物车',
      mainTabBarShow: true

    }
  },
  {
    path: '/Profile',
    component: Profile,
    meta: {
      title: '个人首页',
      mainTabBarShow: true

    }
  },
  {
    path: '/Detail/:iid',
    component: Detail,
    meta: {
      mainTabBarShow: false
    }

  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
