<script>
import BarLeft from './BarLeft.vue';

export default {
    name: "AppBody",
    components: {
        BarLeft,
    }
}
</script>

<template>
    <section class="ctn_body_app">
        <BarLeft />
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss";
@use "../styles/partials/variables.scss";

.ctn_body_app {
    width: 100vw;
    height: calc(100vh - 80px);
    display: flex;
}
</style>