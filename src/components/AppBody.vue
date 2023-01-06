<script>
import BarLeft from './BarLeft.vue';
import ShowroomSong from './ShowroomSong.vue';

export default {
    name: "AppBody",
    components: {
        BarLeft,
        ShowroomSong,
    }
}
</script>

<template>
    <section class="ctn_body_app">
        <BarLeft />
        <ShowroomSong />
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

.ctn_body_app {
    width: 100vw;
    height: calc(100vh - 80px);
    display: flex;
}
</style>