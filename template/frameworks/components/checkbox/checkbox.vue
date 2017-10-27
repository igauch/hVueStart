/*
* 描述：多选框组件
* 作者：yangjie
* 创建时间：2017/9/15
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/

<template>
    <div class="checkbox">
        <div class="check" v-for="(item,index) in items" :key="index[labelKey]">
            <label>
                <input type="checkbox"
                       v-model="checkModel"
                       :value="item"
                       @change="add"
                       :disabled="disable"
                       :class="(modelArr.indexOf(item[labelKey])!=-1)||(checkArr.indexOf(item[labelKey])!=-1)?'iconfont icon-checkbox-checked':'iconfont icon-checkbox'"
                >
                <span>{{item[labelKey]}}</span>
            </label>
        </div>
    </div>
</template>
<script>
    export default ({
        name: 'checkbox',
        props: {
            items: Array,
            labelKey: String,
            disable: {
                type: Boolean,
            },
            defaultData: {
                type: Array,
                default: function () {
                    return []
                }
            },
            min:Number,
            max:Number,
            labelAll: String
        },
        data() {
            return {
                checkModel: [],
                checkArr: [],
                modelArr:[],
                change:false,
            }
        },
        methods: {
            add: function () {
                this.checkArr=this.modelArr
            }
        },
        mounted: function () {
            this.checkModel = this.defaultData;
            console.log(this.checkModel.length)
        },
        watch: {
            checkModel: function (newValue, oldValue) {
                this.modelArr=[];
                this.checkArr=[];
                this.defaultData.forEach((val, index) => {
                    this.checkArr.push(val[this.labelKey])
                });
                this.checkModel.forEach((val, index) => {
                    this.modelArr.push(val[this.labelKey])
                });
                if(this.min){
                    if((this.checkModel.length<this.min)&&(newValue.length!==oldValue.length)){
                        this.checkModel=oldValue;
                        return false;
                    }
                }
                if(this.max){
                    if((this.checkModel.length>this.max)&&(newValue.length>oldValue.length)){
                        alert(1)
                        this.checkModel=oldValue;
                        return false;
                    }
                }
                this.$emit('on-change', this.checkModel);
                console.log(this.checkModel)
            },
        }
    })
</script>

<style lang="scss" scoped>
    .check {
        label {
            input, span {
                vertical-align: middle;
            }
        }
    }
</style>
