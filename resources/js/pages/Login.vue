<template>
    <div>
        <h2>Login</h2>

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
            submitted: false
        };
    },
    methods: {
        handleSubmit() {
            this.submitted = true;
            const { email, password } = this;

            axios.post("login", { email, password }).then(response => {
                console.log(response.data);
                router.push({ name: "Home" });
            });
        }
    }
};
</script>
