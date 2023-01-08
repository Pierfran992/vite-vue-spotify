<script>
import axios from 'axios';
import AppBody from "./components/AppBody.vue";
import BannerBottom from "./components/BannerBottom.vue";

import { store } from './store.js';

export default {
    name: "App",
    components: {
        AppBody,
        BannerBottom,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // creo il metodo per far inserire gli oggetti contenuti in tracks nell'array vuoto songList
        getSong() {

            let myUrl = store.apiUrl;

            axios
                .get(myUrl)
                .then(res => {
                    this.store.songList = res.data.tracks;
                })
                .catch(problem => {
                    console.log("Errori", problem);
                });
        }
    },
    mounted() {
        // faccio partire il metodo dopo che ha caricato la struttura della pagina
        this.getSong();
        console.log(store.songList);
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
