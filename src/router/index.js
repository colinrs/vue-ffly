import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import User from '@/views/User'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/user',
        name: 'User',
        component: User
      },
      {
        path: '/index',
        name: 'Index',
        component: Index
      }
    ]
  }]
})
