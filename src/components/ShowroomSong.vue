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
@use "../styles/partials/mixins.scss";
@use "../styles/partials/variables.scss";

section {
    width: calc(100vw - 200px);
    height: 100%;
}
</style>    