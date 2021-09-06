<template>
    <div>
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
            <div class="form-group">
                <label for="name">Name</label>
                <input
                    type="text"
                    v-model="name"
                    required
                    name="name"
                    class="form-control"
                />
            </div>

            <div class="form-group">
                <label for="email">E-mail</label>
                <input
                    type="email"
                    v-model="email"
                    required
                    name="email"
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label for="subscription">Premium €2,- (per maand)</label>
                <input
                    type="checkbox"
                    name="subscription"
                    v-model="subscription"
                />
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Submit</button>
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
            name: "",
            subscription: "",
            user: null
        };
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch("updateUser", {
                email: this.email,
                name: this.name,
                subscription: this.subscription
            });
        },
        getUser() {
            axios.get("api/user").then(response => {
                console.log(response.body);
                this.user = response.data;
            });
        }
    },
    mounted: {}
};
</script>

<style></style>
