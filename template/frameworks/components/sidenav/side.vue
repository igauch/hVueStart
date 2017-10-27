/*
* 描述：side
* 作者：twj94
* 创建时间：2017/9/26
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/

<template>
    <div @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 :collapse="isCollapse" :unique-opened="true" :default-active="activeAt" :default-openeds="activeAtArr">
            <sidenav-itema v-for="(data , index) in datas" :key="index" :datas="data"></sidenav-itema>
        </el-menu>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {router} from '../../../src/router.index.js'

    Vue.component('sidenavItema', {
        name: 'sidenavItema',
        template: `<component v-bind:is="currentView" :datas="datas"></component>`,
        components: {
            submenu: {
                template: `
        <el-submenu :index="datas.at">
            <template slot="title">
                <i class="el-icon-message"></i>
                <span slot="title">{{datas.label}}</span>
            </template>

            <sidenav-itema v-if="datas.children" v-for="(data , index) in datas.children" :key="index" :datas="data"></sidenav-itema>

        </el-submenu>`,
                props: ['datas']
            },
            menuItems: {
                template: `
            <el-menu-item :index="datas.at" @click="rout(datas.path)">
    <i class="el-icon-menu"></i>
                <span slot="title">{{datas.label}}</span>
            </el-menu-item>`,
                props: ['datas'],
                methods: {
                    rout: function (route) {
                        router.push(route);
                    }
                }
            }
        },
        props: ['datas'],
        data() {
            return {
                currentView: this.datas.path ? 'menuItems' : 'submenu'
            }
        }
    });


    export default {
        name: 'gside',
        props: ['datas'],
        data() {
            return {
                isCollapse: true,
                activeAt:'',
                activeAtArr:[]
            }
        },
        methods: {
            handleMouseenter: function () {
                this.isCollapse=false
            },
            handleMouseleave: function () {
                this.isCollapse=true
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
                    Vue.set(v, 'at', JSON.parse(JSON.stringify(at)).join('-'));

                    if (v.path === this.$route.path) {
                        this.activeAt=v.at;
                        let atArr=v.at.split('-');
                        atArr.map( (v,k) => {
                            this.activeAtArr.push(atArr.slice(0,-k).join('-'))
                        });
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
            initNavData(this.datas);
        }
    }
</script>
