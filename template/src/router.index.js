import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import hello from './components/hello.vue'
const root = Vue.component('root', {
  template: '<router-view></router-view>'
});

export let router = new Router({

  routes: [
    {
      path: '/',
      name: 'hello',
      meta: {title:'home'},
      component: root,
      children: [
        {
          path:'hello',
          name:'hello',
          meta:{title:'hello'},
          component:hello
        }
      ]
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
//  do something
  next()
})
