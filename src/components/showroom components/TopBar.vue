<script>
export default {
    name: "TopBar",
}
</script>

<template>
    <div class="top_bar">
        <!-- container dei bottoni next e prev per navigare avanti e indietro nell'app  -->
        <div class="ctn_btn_nav">
            <div class="prev">
                <font-awesome-icon icon="fa-solid fa-angle-left" />
            </div>
            <div class="next">
                <font-awesome-icon icon="fa-solid fa-angle-right" />
            </div>
        </div>

        <div class="ctn_menu">
            <!-- menu di navigazione della top bar -->
            <div class="menu">
                <ul>
                    <li>
                        Premium
                    </li>
                    <li>
                        Assistenza
                    </li>
                    <li>
                        Download
                    </li>
                </ul>
            </div>

            <div class="sign_in">
                Isciviti
            </div>

            <!-- bottone menu per accedere -->
            <div class="btn">
                Accedi
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

// regole css generali della top bar
.top_bar {
    background-color: rgba($color: $thirdColor, $alpha: 0.5);
    width: calc(100vw - 300px);
    height: 80px;
    padding: 0 20px;
    position: fixed;
    top: 0;
    right: 0;
    @include between();
}

// regole css dei bottoni di navigazione
.ctn_btn_nav {
    @include center();
    gap: 10px;

    .next,
    .prev {
        background-color: rgba($color: $thirdColor, $alpha: 0.5);
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        font-size: 20px;
        color: $secondaryColor;
    }

    .next:hover,
    .prev:hover {
        color: $primaryColor;
        background-color: $thirdColor;
        cursor: pointer;
    }
}

.ctn_menu {
    display: flex;
    align-items: center;

    // regole css del menu di navigazione
    .menu {
        height: 25px;
        line-height: 25px;
        padding-right: 25px;
        margin-right: 25px;
        border-right: solid 1px $secondaryColor;

        ul {
            display: flex;
            gap: 20px;

            li {
                color: $secondaryColor;
                font-weight: 600;
                font-size: 14px;
                list-style: none;
                cursor: pointer;

                &:hover {
                    color: $primaryColor;
                    scale: 1.05;
                }
            }
        }
    }

    // regole del bottone per isciversi a spotify
    .sign_in {
        color: $secondaryColor;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        margin-right: 25px;

        &:hover {
            color: $primaryColor;
            scale: 1.05;
        }
    }

    // regole del bottone per accedere a spotify
    .btn {
        @include button();

        &:hover {
            scale: 1.1;
        }
    }
}
</style>