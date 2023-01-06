<script>
export default {
    name: "BarLeft",
}
</script>

<template>
    <section>
        <div class="slot_logo">
            <img src="../assets/img/logospotify.svg" alt="logo spotify" id="logo">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

section {
    background-color: $thirdColor;
    width: 300px;
    height: 100%;
    padding: 20px;
}

.slot_logo {
    width: 150px;
    height: 60px;
}
</style>