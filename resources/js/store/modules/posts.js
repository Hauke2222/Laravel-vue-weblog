import axios from "axios";
import router from "../../router";

export const posts = {
    namespaced: true,
    state: {
        posts: [],
        detailPostComments: [],
        comments: [],
        categories: []
    },
    mutations: {
        SET_POSTS(state, payload) {
            state.posts = payload;
        },
        SET_UPDATE_POST(state, payload) {
            state.posts = payload;
        },
        SET_COMMENT(state, payload) {
            state.comments = payload;
        },
        SET_POST_COMMENTS(state, payload) {
            state.detailPostComments = payload;
        },
        SET_CATEGORIES(state, payload) {
            state.categories = payload;
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
                commit("SET_POSTS", [response.data.post]);
            });
        },
        getAuthorsPosts({ commit }) {
            axios.get("api/authorposts").then(response => {
                commit("SET_POSTS", response.data.posts);
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
        updatePost({ commit }, payload) {
            axios
                .post(`api/posts/${payload.getAll("id")[0]}`, payload)
                .then(response => {
                    commit("SET_UPDATE_POST", response.data.posts);
                    router.push({ name: "Home" });
                });
        },
        deletePost(__, payload) {
            axios.delete("api/posts/" + payload).then(response => {
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
        getAuthorsPosts: state => id => {
            return state.posts.filter(post => post.user_id == id);
        },
        getOnePost: state => id => {
            return state.posts.find(post => post.id == id);
        },
        getCategories(state) {
            return state.categories;
        }
    }
};
