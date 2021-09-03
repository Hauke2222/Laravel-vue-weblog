<template>
    <div>
        <nav>
            <ul>
                <li><a href="/">Posts</a></li>
                <li>
                    <a href="#/create">Create</a>
                </li>
                <li>
                    <router-link :to="{ name: 'Login' }">Login</router-link>
                </li>
                <li>
                    <a href="#" @click.prevent="logout">Logout</a>
                </li>
                <li>
                    <router-link to="/subscribe">Subscribe</router-link>
                </li>
            </ul>
        </nav>
        <div>
            <h1 class="center">{{ message }}</h1>
            <router-view />
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            message: "Laravel vue weblog"
        };
    },
    methods: {
        logout() {
            axios.post("logout").then(response => {
                console.log(response);
                //router.push({ name: "Home" });
            });
        }
    }
};
</script>
<style>
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
    color: #666;
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

input {
    padding: 6px;
    border: solid lightgray;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 21px;
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
