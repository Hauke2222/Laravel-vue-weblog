<template>
    <div>
        <h2>Login</h2>

        <div>Login response: {{ loginResponse }}</div>

        <div>GET api/user response: {{ userResponse }}</div>

        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Email address</label>
                <input
                    type="text"
                    v-model="email"
                    required
                    name="email"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    v-model="password"
                    required
                    name="password"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
    data() {
        return {
            email: "",
            password: "",
            submitted: false,
            loginResponse: "",
            userResponse: ""
        };
    },
    created() {
        this.getUser();
    },
    methods: {
        getUser() {
            axios.get("api/user").then(response => {
                this.userResponse = response;
            });
        },
        handleSubmit() {
            this.submitted = true;
            const { email, password } = this;

            axios
                .post("login", { email, password })
                .then(response => {
                    router.push({ name: "Home" });
                })
                .catch(error => {
                    this.loginResponse = error;
                });
        }
    }
};
</script>
