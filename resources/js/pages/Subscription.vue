<template>
    <div class="padding">
        <b>Subscribe</b><br /><br />
        <form @submit.prevent="handleSubmit">
            <table border="0">
                <tr>
                    <td>name:</td>
                    <td>
                        <p>{{ user.name }}</p>
                    </td>
                </tr>
                <tr>
                    <td>e-mail:</td>
                    <td>
                        <p>{{ user.email }}</p>
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
export default {
    computed: {
        user() {
            return this.$store.getters.getLoggedInUser;
        }
    },
    data() {
        return {
            subscription: false,
            id: this.$store.getters.getLoggedInUser.id
        };
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch("updateUser", {
                subscription: this.subscription,
                id: this.id
            });
        }
    },
    mounted() {}
};
</script>

<style></style>
