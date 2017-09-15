import Vue from 'vue'
import Router from 'vue-router'
/**
 * 看webpack配置
 * build文件夹里的webpack.base.conf.js里面的resolve里面的alias
 */
import hello from '@/components/Hello'

/**
 * 安装插件
 * 该插件直接在Vue上进行了扩展，所以在使用时直接this.{$name}即可
 * {$name}可直接在该插件的提供文档去找或在该文件里搜索Vue.prototype
 */
Vue.use(Router)
/**
 * export default时在import defaultMember时defaultMember可以随意命名且不能加{}
 * 并且一个js文件只能有一个这样的export，可以添加其他的已经命名好的export
 * export var在import时必须import {var}
 */
export let router = new Router({
    /**
     * routes：一组路由
     */
    routes: [
        {
            /**
             * 对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"
             */
            path: '/',
            /**
             * 定义当前路由的名称，非必需
             */
            name: 'hello',
            /**
             * 视图组件
             * 如果多个components?: { [name: string]: Component };
             */
            component: hello
        },
        /**
         * 模拟了angular-ui-router的otherwise
         * 必须写在最后
         */
        {
            path: '/*',
            redirect: '/'
        }
    ]
})

/**
 * 创建全局的导航钩子，用以拦截导航，完成导航或取消
 */
router.beforeEach((to, from, next) => {
    /**
     * next 是一个函数，必须被执行，否则这个钩子就不能被resolve，而导航也会一直在等待中，所以必须调用以完成逻辑
     */
    next()
//  do something
})
