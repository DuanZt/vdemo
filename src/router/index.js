import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'vue/demo/dist',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/user/:username',
      component: user
    }
  ]
})
