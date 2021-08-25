import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        detailPost: [],
        detailPostComments: [],
        comments: []
    },
    mutations: {
        SET_POSTS(state, payload) {
            state.posts = payload;
        },
        SET_DETAIL_POST(state, payload) {
            state.detailPost = payload;
        },
        SET_COMMENT(state, payload) {
            state.comments = payload;
        },
        SET_POST_COMMENTS(state, payload) {
            state.detailPostComments = payload;
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
        },
        createComment({ commit }, payload) {
            axios.post("api/comments", payload).then(response => {
                commit("SET_COMMENT", response.data.comments);
                router.push({ name: "Home" });
            });
        }
        /*login({ commit }, payload) {
            axios.post("login", { payload}).then(response => {
                console.log(response.data);
                //router.push({ name: "Home" });
            });
        }*/
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
