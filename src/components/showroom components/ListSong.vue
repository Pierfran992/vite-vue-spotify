<script>
import CardGenerator from '../list song components/CardGenerator.vue';
import AppFooter from '../list song components/AppFooter.vue';

import { store } from '../../store.js';

export default {
    name: "ListSong",
    components: {
        CardGenerator,
        AppFooter,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section>
        <!-- contenitore delle canzoni -->
        <div class="container">
            <div class="ctn_song">
                <!-- componente che genererà le card per le canzioni -->
                <h2>Spotify Playlists</h2>
                <CardGenerator />
            </div>
            <!-- footer -->
            <footer>
                <AppFooter />
            </footer>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins.scss" as *;
@use "../../styles/partials/variables.scss" as *;

section {
    background-color: $bgListSong;
    width: 100%;
    height: 100%;
    padding-top: 100px;
}

.container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding-bottom: 60px;
    overflow-y: auto;

    .ctn_song {
        @include start();
        flex-wrap: wrap;

        h2 {
            color: $primaryColor;
        }
    }

}
</style>