import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/products'
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('./views/NotFound')
    }
  ]
})
