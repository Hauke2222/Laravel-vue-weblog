import axios from "axios";
import router from "../../router";

export const auth = {
    namespaced: true,
    state: {
        user: [],
        loggedInUser: [],
        loggedIn: false
    },
    mutations: {
        SET_LOGGEDIN_USER(state, payload) {
            state.loggedInUser = payload;
        },
        SET_LOGGEDIN(state, payload) {
            state.loggedIn = payload;
        }
    },
    actions: {
        login({ commit, dispatch }, { email, password }) {
            axios.post("login", { email, password }).then(response => {
                router.push({ name: "Home" });
                dispatch("loggedInUser");
            });
        },
        logout({ commit }) {
            axios.post("logout").then(response => {
                commit("SET_LOGGEDIN", false);
                commit("SET_LOGGEDIN_USER", "");
            });
        },
        loggedInUser({ commit }) {
            axios.get("/api/users").then(response => {
                commit("SET_LOGGEDIN_USER", response.data);
                commit("SET_LOGGEDIN", true);
            });
        }
    },
    getters: {
        getLoggedInUser(state) {
            return state.loggedInUser;
        },
        getLoggedIn(state) {
            return state.loggedIn;
        }
    }
};
