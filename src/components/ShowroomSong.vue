<script>
import TopBar from "./showroom components/TopBar.vue";
import ListSong from "./showroom components/ListSong.vue";

export default {
    name: "ShowroomSong",
    components: {
        TopBar,
        ListSong,
    }
}
</script>

<template>
    <section>
        <TopBar />
        <ListSong />
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

section {
    width: calc(100vw - 300px);
    height: 100%;
}
</style>    