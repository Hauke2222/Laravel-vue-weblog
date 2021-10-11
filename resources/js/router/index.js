import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Create from "../pages/posts/Create.vue";
import Show from "../pages/posts/Show.vue";
import Edit from "../pages/posts/Edit.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Author from "../pages/Author.vue";
import Subscription from "../pages/Subscription.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Home,
            name: "Home"
        },
        {
            path: "/create",
            component: Create,
            name: "Create",
            meta: {
                shouldBeLoggedIn: true
            }
        },
        {
            path: "/show/:postId",
            component: Show,
            name: "Show"
        },
        {
            path: "/edit/:postId",
            component: Edit,
            name: "Edit",
            meta: {
                shouldBeLoggedIn: true
            }
        },
        {
            path: "/login",
            component: Login,
            name: "Login",
            meta: {
                shouldBeLoggedIn: false
            }
        },
        {
            path: "/register",
            component: Register,
            name: "Register",
            meta: {
                shouldBeLoggedIn: false
            }
        },
        {
            path: "/subscribe",
            component: Subscription,
            name: "Subscription",
            meta: {
                shouldBeLoggedIn: true
            }
        },
        {
            path: "/author",
            component: Author,
            name: "Author",
            meta: {
                shouldBeLoggedIn: true
            }
        }
    ]
});

router.beforeEach(({ meta }, from, next) => {
    const isLoggedIn = store.getters.getLoggedIn;
    if (meta.shouldBeLoggedIn && !isLoggedIn) next({ name: "Login" });
    next();
});

export default router;
