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
@use "../../styles/partials/mixins.scss";
@use "../../styles/partials/variables.scss";

.top_bar {
    background-color: rgba($color: #000000, $alpha: 0.9);
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
}
</style>