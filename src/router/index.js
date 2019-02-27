import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import login from '@/components/login'
import register from '@/components/register'
import setting from '@/components/setting'
import order from '@/components/order'
import orderdetail from '@/components/orderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderdetail',
      name: 'orderdetail',
      component: orderdetail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/mainPage',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]
})
