<template>
    <div>
        <h2>Login</h2>

        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Email address</label>
                <input
                    type="text"
                    v-model="loginDetails.email"
                    required
                    name="email"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    v-model="loginDetails.password"
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
export default {
    data() {
        return {
            loginDetails: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.loginDetails);
            this.$store.dispatch("login", this.loginDetails);
        }
    }
};
</script>
