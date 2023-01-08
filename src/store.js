import { reactive } from "vue";

export const store = reactive({
    // dati per il footer
    azienda: [
        "Chi siamo",
        "Oppurtunità di lavoro",
        "For the Record"
    ],

    community: [
        "Per artisti",
        "Sviluppatori",
        "Pubblicità",
        "Investitori",
        "Venditori"
    ],

    linkUtili: [
        "Assistenza",
        "App per cellulare gratuita",
        "Diritti del consumatore"
    ],

    info: [
        "Informazioni legali",
        "Centro sulla privacy",
        "Informativa sulla privacy",
        "Impostazioni cookie",
        "Info annunci",
    ],
    apiUrl: "https://shazam.p.rapidapi.com/songs/list-recommendations?rapidapi-key=ac17c959b3msh7946882415fa45ep1ea6cdjsn551ae2916179&key=484129036&locale=en-US",
    songList: [],
});