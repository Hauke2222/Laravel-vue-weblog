import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Create from "../pages/posts/Create.vue";
import Show from "../pages/posts/Show.vue";
import Login from "../pages/Login.vue";
import Subscription from "../pages/Subscription.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home,
            name: "Home"
        },
        {
            path: "/create",
            component: Create
        },
        {
            path: "/show/:postId",
            component: Show,
            name: "Show"
        },
        {
            path: "/login",
            component: Login,
            name: "Login"
        },
        {
            path: "/subscribe",
            component: Subscription
        }
    ]
});
