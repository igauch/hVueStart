<template>
    <div></div>
</template>

<script>
    export default {
        name:'howsoEcharts',
        props:['option'],
        watch:{
            option:function (newVal) {
                this.echarts.dispose(this.$el);
                let chart=this.echarts.init(this.$el);
                chart.setOption(newVal);
            }
        },
        mounted(){
            let chart=this.echarts.init(this.$el);
            this.option&&chart.setOption(this.option);
        }
    }
</script>

<style scoped>
    div{
        width: 100%;
        height: 100%;
    }
</style>
