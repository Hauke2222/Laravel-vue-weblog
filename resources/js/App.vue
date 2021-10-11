<template>
    <div>
        <nav-bar />
        <div>
            <router-view />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "./router";
import NavBar from "./pages/NavBar.vue";

export default {
    components: { NavBar }
};
</script>
<style>
.padding {
    padding: 8px;
}
.center {
    display: flex;
    justify-content: center;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;
}

li {
    float: left;
}

li a {
    font-size: 24px;
    display: block;
    color: #666;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: white;
    color: black;
}

.float-right {
    float: right;
}
.responsive-img {
    width: 70%;
    height: auto;
}

.button {
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
}

.button:hover {
    background-color: #e7e7e7;
}

label {
    font-size: 21px;
}

select {
    font-size: 18px;
}

.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 33%;
    padding: 8px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.post-card-img {
    width: 100%;
}

.post-card-title {
    font-size: 34px;
    padding: 8px;
}

.post-card-category {
    padding: 8px;
}

.post-card-author-date {
    padding: 8px;
}

a:visited {
    color: black;
}

a {
    text-decoration: none;
}

.card-li {
    float: none;
}
</style>
