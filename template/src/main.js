// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import {router} from './router.index'
import axios from 'axios'
import ElementUI from 'element-ui/src/index.js'
import 'element-ui/lib/theme-default/index.css'

Vue.prototype.$http = axios

Vue.use(ElementUI)
/**
 * @type {boolean}
 * 设置为 false 以阻止 vue 在启动时生成生产提示
 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
