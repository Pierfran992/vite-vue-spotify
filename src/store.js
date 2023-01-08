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
});