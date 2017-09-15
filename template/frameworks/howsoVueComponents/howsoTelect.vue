/**
* 描述：vue  select下拉框组件
* 作者：zhutiantian
* 创建时间：2017/08/29
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/
<template>
    <!--用div和ul和li模拟一个下拉框，便于个性化样式定制-->
    <div class="select-dropdown">
        <div class="input-inner">
            <i class="input-icon"></i>
            <input type="text" readonly="readonly" v-model="selectVal" @click="isSelected=!isSelected"/>
        </div>
        <ul class="select-dropdown-content" v-if="isSelected">
            <li v-for="(item ,index) in items" :key="index" :class="{selected : currentId==index}"
                @click="btnSelected(index)" @mouseover="hover(index)">
                {{item[nameKey]}}
            </li>
            <!--<p>{{items[this.selectedId][this.nameKey]}}</p>-->
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        /*组件导出的名字*/
        name: 'howso-select',
        /*接收父组件的数据items,和对象属性命名*/
        props: ['items', 'nameKey'],
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
            btnSelected(id) {
                this.currentId = id;
                this.selectedId = id;
                this.isSelected = false;
                this.selectVal = this.items[this.selectedId][this.nameKey]
            },
            /*鼠标hover下拉框选项将高亮的索引值赋值*/
            hover(id) {
                this.currentId = id;
            }
        },
        watch: {
            /*监听当前选中的索引值并通过接口传递给父组件*/
            selectedId(newVal) {
                this.$emit('selected-event', newVal)
            },
            /***监听父集传递的数据是否更新才进行赋值，避免响应时间过长数据传递过来为空报错**/
            items(val) {
                this.selectVal = this.items[this.selectedId][this.nameKey]
            }
        }
    }
</script>
<style lang="scss">
    /*下拉框默认的border颜色*/
    $select-default-borderColor: #d0d0d0;
    /*下拉框选项卡默认的背景颜色*/
    $select-li-default-bgColor: #fff;
    /*下拉框选项高亮hover的背景颜色*/
    $select-li-hover-bgColor: #0885fd;
    /*下拉框选项高亮hover的字体颜色*/
    $select-li-hover-fontColor: #fff;
    .select-dropdown {
        position: relative;
        width: 100px;
        input {
            -webkit-appearance: none;
            width: 100%;
            padding: 2px 10px;
            border: 1px solid $select-default-borderColor;
        }
        .input-inner {
            position: relative;
            .input-icon {
                position: absolute;
                width: 10px;
                height: 8px;
                top: 50%;
                right: 6px;
                margin-top: -4px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFQkQyNzlGREMxNzBFNTExODM4RTlENTIyOTNEQjBGMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NEVGRTVDQzRDRUIxMUU3QTk5NUM2MDBDRDhBOUYyOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NEVGRTVDQjRDRUIxMUU3QTk5NUM2MDBDRDhBOUYyOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0YjU4NjQ0My0wYTAyLTQzNjQtOTk4YS1jNTM2YTk1YTVhZGQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTlEMjc5RkRDMTcwRTUxMTgzOEU5RDUyMjkzREIwRjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6WwSONAAAAY0lEQVR42mL8//8/AzGApaioaBqQziSgbjoTkMgF4n14FIHk8kAK/wJxEBDfwaIIJBYMxH+YoAIfgdgTSjMgiXkB8QcQhwlNdxDUhr9Qk27DPYPFPSA3MwLxXmQJRmKDByDAAC9ZGjvqa0mEAAAAAElFTkSuQmCC) no-repeat;
            }
        }
        .select-dropdown-content {
            position: absolute;
            width: 100%;
            border: 1px solid $select-default-borderColor;
            border-top: none;
            li {
                padding: 2px 10px;
                background: $select-li-default-bgColor;
                &.selected, &:hover {
                    background: $select-li-hover-bgColor;
                    color: $select-li-hover-fontColor;
                }
            }
        }
    }


</style>
