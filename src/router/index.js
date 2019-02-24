import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import login from '@/components/login'
import register from '@/components/register'
import setting from '@/components/setting'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: login
    // },
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
