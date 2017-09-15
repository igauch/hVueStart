<template>
  <ul class="side-nav">
    <!--

    父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。
    一个常见错误是试图在父组件模板内将一个指令绑定到子组件的属性/方法

    -->
    <howso-sidenav-item @itemClick="itemClick" :datas="data" :align="align"
                        v-for="(data , index) in navListData"
                        :key="index"></howso-sidenav-item>
  </ul>
</template>

<script>
  import Vue from 'vue'
  import {howsoRouterBus} from '../bus'

  export default {
    howsoRouterBus: howsoRouterBus,
    name: 'sideNav',
    components: {
      howsoSidenavItem: {
        name: 'howsoSidenavItem',
        template:
          `<li class="list-unstyled" :class="data.class">
            <router-link v-if="data.path" class="d-block" :to="data.path" @click.native="itemClick(data)">
              <span v-if="data.iconClass" class="d-inline-block" :class="data.iconClass"></span>{{data.label}}
            </router-link>
            <div v-if="!data.path" class="cursor-pointer d-flex align-items-center"  @click="itemClick(data)">
              <span v-if="data.iconClass" class="d-inline-block" :class="data.iconClass"></span>
              <span class="menuTitle">{{data.label}}</span>
              <span class="flex-1"></span>
              <span class="iconfont icon-triangle" v-if="data.children&&data.children.length"></span>
            </div>
            <ul v-show="data.children&&!data.isFolder" :class="[align, data.deepClass]">
              <howso-sidenav-item @itemClick="itemClick" :datas="data" v-for="(data,index) in data.children" :key="index"></howso-sidenav-item>
            </ul>
           </li>`,
        props: ['datas', 'align'],
        data() {
          return {
            data: this.datas
          }
        },
        methods: {
          itemClick: function (data) {
            this.$emit('itemClick', data);
          }
        }
      }
    },
    props: ['datas', 'align'],
    /**
     * 只有data里的数据才具有响应式特性，且不传递到其下级数据，下级数据的修改需要使用set或可被VUE观测到的方法
     */
    data() {
      return {
        navListData: this.datas,
        breadcrumb: '',
//        通过点击记录到的包含路径的导航条目数据，用以对比当前激活的路径对应的导航条目数据
        clickPathData: {}
      }
    },
    methods: {
//      TODO 手动切换路由有问题  未给active类
      itemClick: function (pama) {
        pama.isFolder !== undefined && Vue.set(pama, 'isFolder', !pama.isFolder);
        pama.path && (this.clickPathData = pama);
      },
      routerEvent: function (pama) {
        let at = pama.at;
        this.breadcrumb = [];
        let forTree = (data) => {
          data = data.map((v) => {
            if (at !== v.at) {
              if (v.isFolder !== undefined) {
                let Bl = at.join().indexOf(v.at.join()) !== 0;
                Bl || this.breadcrumb.push(v.label);
                Vue.set(v, 'isFolder', Bl);
              }
            }
            v.children && forTree(v.children);
            return v;
          });
        };
        forTree(this.navListData);
        this.breadcrumb.push(pama.label);
      },
      getActivePathData: function (path) {
        let _tree = (data) => {
          data.map((v) => {
            if (v.path === path.path) {
              this.clickPathData = v;
              return false;
            } else {
              v.children && _tree(v.children);
            }
          })
        };
        _tree(this.navListData);
        return this.clickPathData;
      }
    },
    /**
     * 和angular不同，watch并不会在‘初始化’时得到监听，因为其是在数据准备就绪后才被设置
     */
    watch: {
      $route: function (newVal) {
        newVal === this.clickPathData.path || this.getActivePathData(newVal);
        this.routerEvent(this.clickPathData);
        setTimeout(() => {
          howsoRouterBus.$emit('updateBreadcrumb', this.breadcrumb);
        });
      }
    },
    created() {
      let at = [1];
      /**
       * 格式化传进来的导航数据，就是增加一些字段以数据驱动DOM行为
       * @param data 遍历的数组
       */
      let initNavData = (data) => {
        let test = 0;
        data = data.map((v, k) => {
          at.push(++test);
          Vue.set(v, 'at', JSON.parse(JSON.stringify(at)));

          if (v.path === this.$route.path) {
            this.routerEvent(v);
          }
          if (!v.children) {
            at.splice(-1, 1);
            return v;
          }
          /**
           * 只要改变且关于视图刷新的无论何时都要使用那些可以被VUE观察到的方法
           */
          Vue.set(v, 'isFolder', true);
          initNavData(v.children);
          at.splice(-1, 1);
          return v;
        });
      };
      initNavData(this.navListData);
    },
    mounted() {
// 触发面包屑组件
      howsoRouterBus.$emit('updateBreadcrumb', this.breadcrumb);
    }
  }
</script>
