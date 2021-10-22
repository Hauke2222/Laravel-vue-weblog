<template>
    <div class="padding">
        <b>Login</b><br /><br />
        <form @submit.prevent="handleSubmit">
            <table border="0">
                <tr>
                    <td>e-mail:</td>
                    <td>
                        <input
                            required
                            type="text"
                            name="email"
                            size="20"
                            autocorrect="off"
                            spellcheck="false"
                            autocapitalize="off"
                            autofocus="true"
                            v-model="loginDetails.email"
                        />
                    </td>
                </tr>
                <tr>
                    <td>password:</td>
                    <td>
                        <input
                            required
                            type="password"
                            name="password"
                            size="20"
                            v-model="loginDetails.password"
                        />
                    </td>
                </tr>
            </table>

            <br />
            <input type="submit" />
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
            this.$store.dispatch("auth/login", this.loginDetails);
        }
    }
};
</script>
