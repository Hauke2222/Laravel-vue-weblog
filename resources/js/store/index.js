import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        detailPost: []
    },
    mutations: {
        SET_POSTS(state, payload) {
            state.posts = payload;
        },
        SET_DETAIL_POST(state, payload) {
            state.detailPost = payload;
        }
    },
    actions: {
        getAllPosts({ commit }) {
            axios.get("api/posts").then(response => {
                commit("SET_POSTS", response.data.posts);
            });
        },
        getOnePost({ commit }, postId) {
            axios.get("api/posts/" + postId).then(response => {
                commit("SET_DETAIL_POST", response.data);
            });
        },
        createPost({ commit }, payload) {
            axios.post("api/posts", payload).then(response => {
                commit("SET_POSTS", response.data.posts);
                router.push({ name: "Home" });
            });
        }
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
        getOnePost(state) {
            return state.detailPost;
        }
    }
});
