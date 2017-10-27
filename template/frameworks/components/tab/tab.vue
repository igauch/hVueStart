/**
* 描述：vue  tab标签页组件
* 作者：zhutiantian
* 创建时间：2017/08/29
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/
<template>
    <div class="tab btn-group">
        <button type="button" class="btn btn-outline-primary cursor-pointer" v-for="(item,index) in items"
                :class="[{active: currentIndex===index },item.className]"
                @click="btnClick(index)">{{item[labelKey]}}
        </button>
    </div>
</template>
<script>
    export default {
        /*组件导出名字*/
        name: 'tab',
        /*继承获取父集的items*/
        props: {
            items: {
                type: Array,
                default() {
                    return []
                }
            },
            labelKey: String
        },
        data(){
            return {
                /*当前选中项的index*/
                currentIndex: 0
            }
        },
        methods: {
            /*函数是点击标签页每项通过获取的索引值来改变当前的定义的currentIndex*/
            btnClick(i){
                this.currentIndex = i;
                this.$emit('on-change',this.items[i]);
            }
        },
        mounted(){
            if(this.items.length>0){
                this.$emit('on-change',this.items[0]);
            }
        },
        /*监听items的值更新*/
        watch:{
            items(val){
                this.$emit('on-change',this.items[0]);
            }
        }
    }
</script>
