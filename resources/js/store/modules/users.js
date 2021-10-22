import axios from "axios";

export const users = {
    namespaced: true,
    state: {
        user: []
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        createUser({ commit }, payload) {
            axios.post("api/users", payload).then(response => {
                commit("SET_USER", response.data.users);
                router.push({ name: "Home" });
            });
        },
        updateUser({ commit }, payload) {
            axios.put("api/users/" + payload.id, payload).then(response => {
                commit("SET_USER", response.data.users);
                router.push({ name: "Home" });
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
