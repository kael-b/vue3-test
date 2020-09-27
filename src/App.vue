<template>
    <a-layout class="app-layout">
        <a-layout-header><Header /></a-layout-header>
        <Main></Main>
    </a-layout>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from '@/components/Layout/Header.vue'
import Main from '@/components/Layout/Main.vue'
@Options({
    components: { Header, Main },
})
export default class App extends Vue {
    test = 0
}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    overflow: hidden;
}
.ant-menu-item-selected {
}
</style>
<style lang="scss" scoped>
.app-layout {
    height: 100%;
    overflow: hidden;
}
</style>
