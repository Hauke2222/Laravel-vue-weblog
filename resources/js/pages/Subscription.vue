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
                <label for="premium_content_status"
                    >Premium €2,- (per maand)</label
                >
                <input type="checkbox" name="premium" v-model="premium" />
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
            premium: ""
        };
    },
    methods: {
        handleSubmit() {
            this.$store.dispatch("updateUser", {
                email: this.email,
                name: this.name,
                premium: this.premium
            });
        }
    }
};
</script>

<style></style>
