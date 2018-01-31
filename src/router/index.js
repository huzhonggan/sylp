import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/main',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children:[
        {
          path: '/',
          component: resolve => require(['../components/page/Fenlei.vue'], resolve)
        },
        {
          path: '/fenlei',
          component: resolve => require(['../components/page/Fenlei.vue'], resolve)
        }
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    }
  ]
})
