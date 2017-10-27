<template>
	<div class="collapse" :class="{ 'is-active': active }">
        <div class="card">
            <div class="card-header touchable" role="tab" :aria-expanded="active ? 'true' : 'fase'"
                 @click="toggle">
                <slot name="header"></slot>
            </div>
            <transition name="fade">
                <div class="card-body" v-if="active">
                    <div class="collapse-content-box">
                        <slot name="body"></slot>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Collapse',
        data() {
            return {
                active: false
            }
        },
        props: {
            selected: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        created() {
            this.active = this.selected;
        },
        ready() {
            if (this.active) {
                this.$emit('collapse-open')
            }
        },
        methods: {
            toggle() {
                this.active = !this.active;
                if (this.active) {
                    this.$emit('collapse-open')
                }
            }
        }
    }
</script>
