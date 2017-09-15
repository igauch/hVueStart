<template>
    <div class="hello">
        <img src="../styles/imgs/logo.png" alt="华苏" class="mx-auto">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: '欢迎使用华苏VUE构建工具'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
