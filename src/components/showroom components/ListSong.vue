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
            <!-- titolo playlist -->
            <h2>Spotify Playlists</h2>
            <div class="ctn_song">
                <!-- componente che genererĂ  le card per le canzoni -->
                <CardGenerator v-for="(obj, index) in store.songList" :key="obj.index" :info="obj" />
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
    padding: 100px;
    overflow-y: auto;
}

.container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    padding-bottom: 60px;

    h2 {
        color: $primaryColor;
        margin-bottom: 20px;
    }

    .ctn_song {
        @include start();
        flex-wrap: wrap;
        gap: 30px 10px;
    }

}
</style>