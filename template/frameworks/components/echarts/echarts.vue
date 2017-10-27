<template>
    <div class="echarts"></div>
</template>

<script>
    export default {
        name: 'echarts',
        props: ['option', 'addClick'],
        data () {
            return {
                timeLine: {}
            }
        },
        watch: {
            option: function (newVal) {
                this.echarts.dispose(this.$el);
                let chart = this.echarts.init(this.$el);
                chart.setOption(newVal);

                let that = this;
                if (this.addClick) {
                    chart.on('click', function (params) {
                        console.log(params.name);
                        that.$emit('upup', params.name);
                    });
                }
            },
        },
        mounted () {
            let chart = this.echarts.init(this.$el);
            chart.on('timelinechanged', (timeLineIndex)=> {
                //console.log(timeLineIndex)
                this.$emit('selectA',timeLineIndex)
            });
            this.option && chart.setOption(this.option);
        }
    }
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
    }
</style>
