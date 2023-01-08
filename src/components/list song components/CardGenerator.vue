<script>
export default {
    name: "CardGenerator",
    props: ["info"],
}
</script>

<template>
    <!-- creo la struttura della card -->
    <div class="gen_card">
        <div class="slot_img">

        </div>
        <h4>hahahhahaha</h4>
        <p>hahah ajshdjada dakjhdjksada jkadhkajshda ahdaksjdhjsad</p>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

.gen_card {
    background-color: $cardColor;
    width: calc((100% - 90px) / 9);
    height: 250px;
    padding: 10px;
    border-radius: 10px;

    .slot_img {
        background-color: black;
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    h4 {
        color: $primaryColor;
        font-size: 15px;
        margin-bottom: 5px;
    }

    p {
        color: $secondaryColor;
        font-size: 13px;
        font-weight: 600;
    }
}
</style>