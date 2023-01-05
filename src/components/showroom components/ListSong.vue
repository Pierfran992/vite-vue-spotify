<script>
export default {
    name: "ListSong",
}
</script>

<template>
    <section>
        <div class="ctn_song">

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins.scss";
@use "../../styles/partials/variables.scss";

section {
    background-color: #121212;
    width: 100%;
    height: 100%;
    padding-top: 100px;
}

.ctn_song {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding-bottom: 60px;
    overflow-y: auto;
}
</style>