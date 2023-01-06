<script>
export default {
    name: "BarLeft",
}
</script>

<template>
    <section>
        <div>
            <!-- slot contenente il logo di spotify -->
            <div class="slot_logo">
                <img src="../assets/img/logospotify.svg" alt="logo spotify" id="logo">
            </div>

            <!-- menu di navigazione -->
            <div class="nav_bar_left">
                <ul>
                    <li class="active">
                        <font-awesome-icon icon="fa-solid fa-house" class="icon_menu" />
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon_menu" />
                        <a href="#">Cerca</a>
                    </li>

                    <li>
                        <font-awesome-icon icon="fa-solid fa-book" class="icon_menu" />
                        <a href="#">La tua Libreria</a>
                    </li>
                </ul>
            </div>

            <!-- menu playlist e brani preferiti -->
            <div class="ctn_playlist_user">
                <ul>
                    <li>
                        <div class="add_playlist">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                        </div>
                        <a href="#">Crea playlist</a>
                    </li>

                    <li>
                        <div class="favourite_song">
                            <font-awesome-icon icon="fa-solid fa-heart" />
                        </div>
                        <a href="#">Brani che ti piacciono</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- container contenente la lista dei link per accedere alla politica sui cookie e alla politica sulla privacy -->
        <div class="link_slot">
            <ul>
                <li>
                    <a href="#">Politica sui cookie</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins.scss" as *;
@use "../styles/partials/variables.scss" as *;

// regole css della sezione
section {
    background-color: $thirdColor;
    width: 300px;
    height: 100%;
    padding: 20px;
    @include column();
}

// regole css del logo
.slot_logo {
    width: 150px;
    height: 60px;
}

// regole css del menu
.nav_bar_left {
    color: $secondaryColor;
    margin-top: 20px;

    .active * {
        color: $primaryColor;
    }

    li {
        list-style: none;
        cursor: pointer;
        padding-bottom: 15px;

        &:hover * {
            color: $primaryColor;
        }

        .icon_menu {
            font-size: 25px;
            margin-right: 10px;
        }

        a {
            color: $secondaryColor;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
        }
    }
}

// regole css della lista delle playlist
.ctn_playlist_user {
    margin-top: 25px;

    li {
        list-style: none;
        cursor: pointer;
        padding-bottom: 15px;
        display: flex;
        align-items: center;

        &:hover {

            a,
            .favourite_song {
                color: $primaryColor;
            }

            .add_playlist {
                background-color: $primaryColor;
            }
        }

        .add_playlist,
        .favourite_song {
            width: 25px;
            height: 25px;
            margin-right: 10px;
            line-height: 25px;
            text-align: center;
            border-radius: 3px;
        }

        .add_playlist {
            color: $thirdColor;
            background-color: $secondaryColor;
        }

        .favourite_song {
            color: $secondaryColor;
            background: $bgBannerBottom;
        }

        a {
            color: $secondaryColor;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
        }
    }
}

// regole css dei link per la privacy e i cookie
.link_slot {
    font-size: 12px;
    font-weight: 600;

    li {
        list-style: none;
        margin-bottom: 7px;
    }

    a {
        color: $secondaryColor;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>