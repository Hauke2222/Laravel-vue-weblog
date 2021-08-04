import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Create from "../pages/posts/Create.vue";
import Show from "../pages/posts/Show.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/create",
            component: Create
        },
        {
            path: "/show",
            component: Show
        }
    ]
});
