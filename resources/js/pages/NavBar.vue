<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'Home' }">Posts</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Create' }">Create</router-link>
                </li>
                <li>
                    <router-link v-if="!loggedIn" :to="{ name: 'Login' }"
                        >Login</router-link
                    >
                </li>
                <li>
                    <router-link v-if="!loggedIn" :to="{ name: 'Register' }"
                        >Register</router-link
                    >
                </li>
                <li>
                    <router-link v-if="loggedIn" :to="{ name: 'Author' }"
                        >Author</router-link
                    >
                </li>
                <li>
                    <router-link v-if="loggedIn" :to="{ name: 'Subscription' }"
                        >Subscribe</router-link
                    >
                </li>
                <li>
                    <a v-if="loggedIn" href="#" @click.prevent="logout"
                        >Logout</a
                    >
                </li>
                <li class="float-right">{{ userName }}</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        userName() {
            return this.$store.getters.getLoggedInUser.name;
        },
        loggedIn() {
            return this.$store.getters.getLoggedIn;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("logout");
        }
    }
};
</script>

<style></style>
