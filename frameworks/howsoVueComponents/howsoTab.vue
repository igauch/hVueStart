/**
* 描述：vue  tab标签页组件
* 作者：zhutiantian
* 创建时间：2017/08/29
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/
<template>
    <div class="btn-group">
        <button class="btn btn-outline-orange cursor-pointer" v-for="(item,index) in tabNames"
                :class="{active: currentIndex===index}"
                @click="btnClick(index)">{{item[nameKey]}}
        </button>
    </div>
</template>
<script>
    export default {
        /*组件导出名字*/
        name: 'tab',
        /*继承获取父集的tabNames*/
        props: ['tabNames', 'nameKey'],
        data: function () {
            return {
                /*当前选中项的index*/
                currentIndex: 0
            }
        },
        methods: {
            /*函数是点击标签页每项通过获取的索引值来改变当前的定义的currentIndex*/
            btnClick: function (i) {
                this.currentIndex = i;
            }
        },
        watch: {
            /*函数是监听当前标签页选中的索引值传递给父集*/
            currentIndex: function (newVal, oldVal) {
                this.$emit('tab-event', newVal);
            }
        }
    }
</script>
