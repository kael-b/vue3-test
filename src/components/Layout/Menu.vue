<template>
    <menu-wrap :isSub="isSub" :route="route">
        <template v-for="(route, index) in menus" :key="index + route.name">
            <a-menu-item :key="route.name" v-if="!hasChildren(route) && !route.meta.hidden">
                <router-link :to="{ name: route.name }">
                    {{ route.meta.title }}
                </router-link>
            </a-menu-item>

            <template v-if="hasChildren(route) && !route.meta.hidden">
                <!-- <template v-slot:title>
                    <span>{{ route.meta.title }} 0-0</span>
                </template> -->
                <Menu :menus="route.children" :isSub="true" :route="route"></Menu>
            </template>
        </template>
    </menu-wrap>
</template>
<script lang="ts">
import { Options, props, mixins } from 'vue-class-component'
import { RouteRecordRaw } from 'vue-router'
import MenuWrap from './MenuWrap.vue'
const Props = props({
    menus: {
        type: Array,
    },
    isSub: Boolean,
    route: Object,
})
@Options({
    name: 'Menu',
    components: {
        MenuWrap,
    },
})
export default class Menu extends mixins(Props) {
    hasChildren(route: RouteRecordRaw) {
        return route.children && route.children.length
    }
}
</script>

<style lang="scss" scoped></style>
