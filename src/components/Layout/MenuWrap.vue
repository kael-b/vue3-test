<template>
    <a-menu :selectedKeys="current" mode="horizontal" :theme="theme" v-if="!isSub">
        <slot></slot>
    </a-menu>
    <a-sub-menu v-else>
        <template v-slot:title>
            <span>{{ route.meta.title }}</span>
        </template>
        <slot></slot>
    </a-sub-menu>
</template>
<script lang="ts">
import { Options, props, mixins } from 'vue-class-component'
const Props = props({
    isSub: Boolean,
    route: Object,
})
@Options({
    name: 'MenuWrap',
    components: {},
    computed: {
        current() {
            if (!this.$route.matched.length) {
                return []
            }
            const len = this.$route.matched.length
            const croute = this.$route.matched[len - 1]
            return [croute.name]
        },
    },
})
export default class MenuWrap extends mixins(Props) {
    theme = 'dark'
}
</script>

<style lang="scss" scoped></style>
