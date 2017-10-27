<template>
    <div id="app">
      <template v-if="!$route.meta.hidden">
        <div class="main d-flex flex-column">
          <top-bar></top-bar>
          <div class="d-flex flex-1">
            <h-sidenav class="text-white bg-primary"></h-sidenav>
            <div class="flex-1 ml-2 mr-2 main-vf">
              <h-breadcrumb class="ml-3 font-weight-bold"></h-breadcrumb>
              <router-view class="main-router-view margin-main"></router-view>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <router-view></router-view>
      </template>
    </div>
</template>

<script>
  import topBar from './components/topbar.vue'

    export default {
        name: 'app',
      components:{ topBar }
    }
</script>

<style lang="scss">
    @import "styles/scss/app";

    html, body, #app {
        height: 100%;
    }
</style>
