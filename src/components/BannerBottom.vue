<script>
export default {
    name: "BannerBottom"
}
</script>

<template>
    <div class="ctn_all">
        <!-- testo del banner -->
        <div class="ctn_text">
            <h5>ANTEPRIMA DI SPOTIFY</h5>
            <p>Iscriviti per ricevere brani e podcast illimitati con annunci pubblicitari occasionali. Non è necessario
                alcuna carta di credito.</p>
        </div>

        <!-- bottone banner per iscriversi -->
        <div class="btn">
            Iscriviti gratis
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

.ctn_all {
    width: 100vw;
    height: 80px;
    padding: 0 15px;
    // background: rgb(135, 0, 133);
    background: $bgBannerBottom;
    @include between();

    .ctn_text {
        color: $primaryColor;
        font-size: 12px;

        p {
            font-weight: 600;
            margin-top: 10px;
        }
    }

    .btn {
        @include button();
    }
}
</style>