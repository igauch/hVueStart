/** * 描述：vue select下拉框组件 * 作者：zhutiantian * 创建时间：2017/08/29 * 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved. * Company:南京华苏科技有限公司 */
<template>
    <!--用div和ul和li模拟一个下拉框，便于个性化样式定制-->
    <div class="select d-inline-block">
        <div class="input-inner">
            <input class="form-control" type="text" readonly v-model="selectVal" @click="isSelected=!isSelected" placeholder="请选择" />
            <i class="input-icon iconfont icon-triangle" @click="isSelected=!isSelected"></i>
        </div>
        <ul class="border" v-show="isSelected">
            <li v-for="(item ,index) in items" :key="index" :class="{active : currentId==index}" @click="btnSelected(index)" @mouseover="hover(index)">
                {{item[labelKey]}}
            </li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        /*组件导出的名字*/
        name: 'select',
        /*接收父组件的数据items,和对象属性命名*/
        props: {
            items: {
                type: Array,
                default() {
                    return []
                }
            },
            labelKey: String
        },
        data() {
            return {
                /*当前高亮hover选中的索引值*/
                currentId: 0,
                /*当前点击选中的索引值*/
                selectedId: 0,
                /*当前是否点击选择下拉框选项不显现*/
                isSelected: false,
                selectVal: ''
            }
        },
        methods: {
            /*点击下拉框中的选项事件函数
             * 将高亮的索引值和选中的索引值进行赋值
             * 下拉框不显现
             * */
            btnSelected(id){
                if(this.selectedId != id) {
                    this.selectedId = id;
                    this.selectVal = this.items[id][this.labelKey];
                    this.$emit('on-change', this.items[id]);
                }
                this.isSelected = false;

            },
            /*鼠标hover下拉框选项将高亮的索引值赋值*/
            hover(id) {
                this.currentId = id;
            }
        },
        mounted(){
            if(this.items.length > 0) {
                this.$emit('on-change', this.items[0]);
                this.selectVal = this.items[this.selectedId][this.labelKey];
            }
        },
        watch: {
            /***监听父集传递的数据是否更新才进行赋值，避免响应时间过长数据传递过来为空报错**/
            items(val) {
                this.currentId = 0;
                this.selectedId = 0;
                this.isSelected = false;
                this.$emit('on-change', this.items[0]);
                this.selectVal = val.length != 0 ? this.items[0][this.labelKey] : '';
            }
        }
    }
</script>
