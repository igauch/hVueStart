/*
* 描述：breadcrumb
* 作者：twj94
* 创建时间：2017/10/11
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/

<template>
  <div>
    <span class="db-breadcrumb-loc">当前位置：</span>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in breadcrumbs" :key="index">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',

    data() {
      return {
        breadcrumbs: []
      };
    },
    watch: {
      '$route'() {
        this.breadcrumbs = (this.$parent && this.$parent.$route && this.$parent.$route.matched) || [];
      }
    },

    created() {
      this.breadcrumbs = (this.$parent && this.$parent.$route && this.$parent.$route.matched) || [];
    }
  };
</script>

<style lang="css">
  .db-breadcrumb-loc {
    float: left;
  }
</style>
