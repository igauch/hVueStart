/**
* 描述：vue分页组件
* 作者：zhutiantian
* 创建时间：2017/08/29
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/
<template>
    <div class="clearfix">
        <ul class="pagination float-left">
            <li class="page-item" :class="{disabled : pageIndex===1 || total===0 }">
                <a class="page-link" @click="(pageIndex!=1 && pageIndex--)">上一页</a>
            </li>
            <li class="page-item" v-for="index in indexs" :class="{'active': pageIndex==index}">
                <a class="page-link" @click="btnClick(index)">{{index}}</a>
            </li>
            <li class="page-item" :class="{disabled : pageIndex===pageCount || total===0}">
                <a class="page-link" @click="(pageIndex!=pageCount && pageIndex++)">下一页</a>
            </li>
        </ul>
        <ul class="pagination pagination-assist float-left">
            <li class="page-item">
                <span class="page-text">共{{total}}条记录</span>
            </li>
            <li class="page-item">
                <span class="page-text px-0">共{{pageCount}}页</span>
            </li>
            <li class="page-item clearfix">
                <span class="page-text float-left">跳转到</span>
                <input type="text" v-model="pageNum" class="form-control float-left page-input" :disabled="total===0"
                       @keyup.13="btnClick(pageNum-0)">
            </li>
            <li class="page-item">
                <a @click="btnClick(pageNum-0)" class="page-link">GO</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'pagination',
        props: ['rows', 'total'],
        data() {
            return {
                pageIndex: 1,
                pageNum: ''
            }
        },
        computed: {
            pageCount() {
                return Math.ceil(this.total / this.rows)
            },
            indexs() {
                /**_left为初始页数值1**/
                let _left = 1;
                /**保存最后中间的页数分页内容数组**/
                let _arr = [];
                /** 如果总页数<=10条则全部显示页数* * */
                if (this.pageCount <= 10 && this.pageCount != 0) {
                    _arr = this.computedFun(_left, this.pageCount, 0)
                }
                /**如果总页数大于10并且当前页数<=5* */
                else if (this.pageCount > 10 && this.pageIndex < 5) {
                    /*当前页数<=5时，分页列表前面显示6个,_right2是一个分界点值，末尾保留最后两页中间以...隔开 比如1 2 3 4 5 6 ... 10 11*/
                    let _right2 = 6;
                    _arr = this.computedFun(_left, _right2, 1)
                }
                /**如果总页数大于10并且当前页数大于5 * */
                else if (this.pageCount > 10 && this.pageIndex >= 5) {
                    /*当前页数>=5时，分页列表前面显示2个,_right2是一个分界点值 比如 1 2 ...*/
                    let _right2 = 2;
                    _arr = this.computedFun(_left, _right2);
                    _arr.push("...");
                    /***当前页数<总页数的第三位 中间页数保留以当前页数为中心3页，末尾只保留最后两页中间以...隔开 比如1 2 ... 7 8 9 ...20 21***/
                    this.pageIndex < this.pageCount - 3 && (_arr = _arr.concat(this.computedFun(this.pageIndex - 1, this.pageIndex + 1, 1)));
                    /***当前页数>=总页数的第三位 ,末尾只保留最后6页中间以...隔开 比如1 2 ...16 17 18 19 20 21***/
                    this.pageIndex >= this.pageCount - 3 && (_arr = _arr.concat(this.computedFun(this.pageCount - 5, this.pageCount)))
                }
                return _arr;
            }
        },
        methods: {
            btnClick(item) {
                if (item > 0 && item <= this.pageCount && !isNaN(item) && (/^[0-9]*$/).test(item)) {
                    this.pageIndex = item;
                } else if (item == '...') {
                    return;
                } else {
                    layer.msg('输入的页数应该是整数并且在1～' + this.pageCount, {icon: 7});
                }
                this.pageNum = ''
            },
            /*获取节点插入数据*/
            computedFun(left, right, point) {
                /*left 和 right 为左右节点 point代表插入...*/
                let arr = [];
                for (let i = left; i <= right; i++) {
                    arr.push(i);
                    if (point == 1 && i == right) {
                        arr.push("...");
                        arr.push(this.pageCount - 1);
                        arr.push(this.pageCount);
                    }
                }
                return arr;
            }
        },
        watch: {
            pageIndex: function (newVal, oldVal) {
                this.$emit('cur', newVal)
            }
        }
    }
</script>
