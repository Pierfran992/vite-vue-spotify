<script>
import AppBody from "./components/AppBody.vue";
import BannerBottom from "./components/BannerBottom.vue";

export default {
    name: "App",
    components: {
        AppBody,
        BannerBottom,
    }
}
</script>

<template>
    <AppBody />
    <BannerBottom />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
