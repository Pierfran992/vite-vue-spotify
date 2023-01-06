<script>
export default {
    name: "TopBar",
}
</script>

<template>
    <div class="top_bar">

    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.top_bar {
    background-color: rgba($color: $thirdColor, $alpha: 0.5);
    width: calc(100vw - 300px);
    height: 80px;
    position: fixed;
    top: 0;
    right: 0;
}
</style>