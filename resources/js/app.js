import Vue from "vue";

import axios from "axios";

//Main pages
import App from "./App.vue";

//Import store
import store from "./store";

//Import router
import router from "./router";

import '../css/app.scss'

new Vue({
    el: "#app",
    store,
    router,
    created() {
        axios.get('http://localhost:8000/sanctum/csrf-cookie');
    },
    render: (h) => h(App),
});

