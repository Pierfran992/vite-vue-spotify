<script>
export default {
    name: "BannerBottom"
}
</script>

<template>
    <div class="ctn_all">

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss";
@use "../styles/partials/variables.scss";

.ctn_all {
    width: 100vw;
    height: 80px;
    background: rgb(135, 0, 133);
    background: linear-gradient(90deg, rgba(135, 0, 133, 1) 22%, rgba(125, 18, 179, 1) 43%, rgba(68, 16, 213, 1) 74%, rgba(0, 212, 255, 1) 100%);
}
</style>