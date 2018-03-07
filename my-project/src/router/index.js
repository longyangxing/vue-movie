import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '@/page/home'
import Flim from '@/page/flim'
import Detail from '@/page/detail'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: App,
    children:[{
        path: '/home',
        name: 'home',
        component: Home
      },{
        path: '/detail',
        name: 'detail',
        component: Detail
      }, {
        path: '/flim/:type',
        name: 'flim',
        component: Flim
      }]
  }
]

const router =  new Router({
  routes
})

export default router;