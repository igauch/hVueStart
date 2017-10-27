import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'

Vue.use(Router)

export let router = new Router({

    routes: [
        {
            path: '/',
            name: 'hello',
            component: hello
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
