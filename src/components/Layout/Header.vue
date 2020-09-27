<template>
    <div class="Header">
        <div class="logo">
            logo
        </div>
        <Menu :menus="menus"></Menu>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { RouteRecordRaw } from 'vue-router'

import Menu from './Menu.vue'
@Options({
    name: 'Header',
    components: {
        Menu,
    },
})
export default class Header extends Vue {
    test = 0
    theme = 'dark'
    current = ['alipay']
    menus: RouteRecordRaw[] = []
    mounted() {
        this.menus = this.$router.options.routes
    }
}
</script>
<style lang="scss" scoped>
.Header {
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    .logo {
        margin-right: 20px;
    }
}
</style>
