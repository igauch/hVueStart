<template>
    <span>{{labels}}</span>
</template>

<script>
    import {howsoRouterBus} from './bus'

    export default {
        name: 'howsoBreadcrumb',
        data() {
            return {
                labels: ''
            }
        },
        created() {
            howsoRouterBus.$on('updateBreadcrumb', (data) => {
                this.labels = data.join(' > ');
            });
        }
    }
</script>
