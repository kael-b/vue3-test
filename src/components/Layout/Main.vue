<template>
    <a-layout-content class="app-layout-content">
        <router-view></router-view>
    </a-layout-content>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
    components: {},
})
export default class Main extends Vue {
    test = 0
}
</script>

<style lang="scss" scoped>
.app-layout-content {
    overflow: auto;
    padding: 20px;
}
</style>
