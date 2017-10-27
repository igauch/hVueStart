<template>
    <div id="app">
        <router-view>

        </router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    @import "styles/scss/app";

    html, body, #app {
        height: 100%;
    }
</style>
