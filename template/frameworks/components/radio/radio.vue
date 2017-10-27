/*
* 描述：单选组件
* 作者：yangjie
* 创建时间：2017/9/19
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/
<template>
    <div class="radio">
        <label  v-for="(item,index) in items" :key="index">
            <input type="radio" v-model="radio" :value="item" @change="change(index)"
                   :class="index===nowIndex?'iconfont icon-radio-checked':'iconfont icon-radio'">
            <span>{{item[labelKey]}}</span>
        </label>
    </div>
</template>
<script>
    export default ({
        name: 'radio',
        props: ['items', 'labelKey'],
        data() {
            return {
                radio: '',
                nowIndex: ''
            }
        },
        methods: {
            change: function (index) {
                this.nowIndex = index;
                this.$emit('on-change', this.radio)
            }
        },
    })
</script>
<style lang="scss" scoped>
    .radio {
        label {
            input, span {
                vertical-align: middle;
            }
        }
    }
</style>
