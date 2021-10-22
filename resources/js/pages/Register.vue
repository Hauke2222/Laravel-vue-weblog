<template>
    <div class="padding">
        <b>Register</b><br /><br />
        <form @submit.prevent="handleSubmit">
            <table border="0">
                <tr>
                    <td>name:</td>
                    <td>
                        <input
                            required
                            type="text"
                            name="name"
                            size="20"
                            autocorrect="off"
                            spellcheck="false"
                            autocapitalize="off"
                            autofocus="true"
                            v-model="userDetails.name"
                        />
                    </td>
                </tr>
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
                            v-model="userDetails.email"
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
                            v-model="userDetails.password"
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
            userDetails: {
                name: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch("users/createUser", this.userDetails);
        }
    }
};
</script>
