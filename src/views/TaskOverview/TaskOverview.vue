<template>
    <div class="TaskOverview">
        TaskOverview
        {{ test }}
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {}
})
export default class TaskOverview extends Vue {
    test = 0;
}
</script>
<style lang="scss" scoped>
.TaskOverview {
}
</style>