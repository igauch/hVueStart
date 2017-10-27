/*
* 描述：topbar
* 作者：twj94
* 创建时间：2017/10/27
* 版权：Copyright 2017 Howso Tech. Co. Ltd. All Rights Reserved.
* Company:南京华苏科技有限公司
*/

<template>
  <div class="text-white top-bar bg-primary">
    <div class="container-fluid">
      <router-link :to="{path: '/'}">
        <img src="../styles/imgs/logo.png" alt="logo" class="logo align-middle">
        <span class="font-weight-bold align-middle align-middle logo-text">demo</span>
      </router-link>
      <div class="float-right user-info">
        <span>欢迎你，{{userName}}</span>
        <i class="iconfont icon-loginout mx-3" @click="logout"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topBar',
    data() {
      return {
        userName: sessionStorage.getItem('userName')
      }
    },
    methods: {
      logout: function () {
        sessionStorage.setItem('userName', null);
        this.$router.push('/login');
      }
    }
  }
</script>
