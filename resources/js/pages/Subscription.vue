<template>
    <div class="padding">
        <b>Subscribe</b><br /><br />
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
                            v-model="name"
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
                            v-model="email"
                        />
                    </td>
                </tr>
                <tr>
                    <td>premium €2,- (per maand):</td>
                    <td>
                        <input
                            type="checkbox"
                            name="subscription"
                            v-model="subscription"
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
import axios from "axios";
import router from "../router";

export default {
    data() {
        return {
            email: "",
            name: "",
            subscription: false,
            id: this.$store.getters.getLoggedInUser.id
        };
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch("updateUser", {
                email: this.email,
                name: this.name,
                subscription: this.subscription,
                id: this.id
            });
        }
    },
    mounted() {}
};
</script>

<style></style>
