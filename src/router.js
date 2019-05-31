import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // base: 'yzdd',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/home'),
      meta: { title: '首页' }
    },
    {
      path: '/login',
      component: () => import('./views/login'),
      meta: { title: '首页' }
    },
    {
      path: '/register',
      component: () => import('./views/register'),
      meta: { title: '注册' }
    },
    {
      path: '/upload',
      component: () => import('./views/upload'),
      meta: { title: '上传资质' }
    },
    {
      path: '/custom',
      component: () => import('./views/custom'),
      meta: { title: '客户信息' }
    },
    {
      path: '/modifypassword',
      component: () => import('./views/modifypassword'),
      meta: { title: '修改密码' }
    },
    {
      path: '/demandhome',
      component: () => import('./views/demandhome'),
      meta: { title: '需求大厅' }
    },
    {
      path: '/longtimedemand',
      component: () => import('./views/longtimedemand'),
      meta: { title: '长期需求' }
    },
    {
      path: '/askdemand',
      component: () => import('./views/askdemand'),
      meta: { title: '询价需求' }
    },
    {
      path: '/offer',
      component: () => import('./views/offer'),
      meta: { title: '报价' }
    },
    {
      path: '/longtimeprice',
      component: () => import('./views/longtimeprice'),
      meta: { title: '长期需求报价' }
    },
    {
      path: '/backlog',
      component: () => import('./views/backlog'),
      meta: { title: '待办事项' }
    },
    {
      path: '/person',
      component: () => import('./views/person'),
      meta: { title: '个人中心' }
    },
    {
      path: '/addperson',
      component: () => import('./views/addperson'),
      meta: { title: '添加业务员' }
    }
  ]
})
