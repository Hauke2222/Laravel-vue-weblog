import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        authorsPosts: [],
        detailPost: [],
        detailPostComments: [],
        comments: [],
        categories: [],
        users: []
    },
    mutations: {
        SET_POSTS(state, payload) {
            state.posts = payload;
        },
        SET_AUTHORS_POSTS(state, payload) {
            state.authorsPosts = payload;
        },
        SET_UPDATE_POST(state, payload) {
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
        },
        SET_CATEGORIES(state, payload) {
            state.categories = payload;
        },
        SET_USER(state, payload) {
            state.users = payload;
        },
        SET_UPDATE_USER(state, payload) {
            state.users = payload;
        }
    },
    actions: {
        getAllPosts({ commit }) {
            axios.get("api/posts").then(response => {
                commit("SET_POSTS", response.data.posts);
            });
        },
        getAuthorsPosts({ commit }) {
            axios.get("api/authorposts").then(response => {
                commit("SET_AUTHORS_POSTS", response.data);
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
        },
        updateUser({ commit }, payload) {
            axios.put("api/users/12", payload).then(response => {
                commit("SET_USER", response.data.users);
                router.push({ name: "Home" });
            });
        },
        updatePost({ commit }, payload) {
            axios
                .post(`api/posts/${payload.getAll("id")[0]}`, payload)
                .then(response => {
                    commit("SET_UPDATE_POST", response.data.posts);
                    router.push({ name: "Home" });
                });
        },
        deletePost({ commit }, payload) {
            axios.delete(`api/posts/1`, payload).then(response => {
                commit("SET_UPDATE_POST", response.data.posts);
                router.push({ name: "Home" });
            });
        },

        getCategories({ commit }) {
            axios.get("api/categories").then(response => {
                commit("SET_CATEGORIES", response.data.categories);
            });
        }
    },
    getters: {
        getPosts(state) {
            return state.posts;
        },
        getAuthorsPosts(state) {
            return state.authorsPosts;
        },
        getOnePost(state) {
            return state.detailPost;
        },
        getCategories(state) {
            return state.categories;
        }
    }
});
