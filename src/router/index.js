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
      keepAlive: true
    },
    component: Home
    // components: {
    //   home: Home
    // }
  },
  {
    path: '/Category',
    component: Category,
    meta: {
      title: '分类',
      mainTabBarShow: true,
    }
  },
  {
    path: '/Shopcart',
    component: ShopCart,
    meta: {
      title: '购物车',
      mainTabBarShow: true,
    }
  },
  {
    path: '/Profile',
    component: Profile,
    meta: {
      title: '个人首页',
      mainTabBarShow: true,
    }
  },
  {
    path: '/Detail/:iid',
    component: Detail,
    meta: {
      mainTabBarShow: false,
    }

  }
]

// export function scrollBehavior (to, from, savedPosition) {
//   // return 期望滚动到哪个的位置
//   if (savedPosition) {
//     return savedPosition
//   } else {
//     return { x: 0, y: 0 }
//   }
// }

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior
})
// router.beforeEach((to, from, next) => {
//   console.log(to,'我是谁')
//   const who = to.path
//   switch(who) {
//     case '/home':
//       // console.log(this)
//   }
//   next()
// })
export default router
