<template>
    <div>
        <h1>{{ this.$route.params.postId }}</h1>
        <div v-for="(p, index) in post" :key="index">
            <h1>{{ p.title }}</h1>
            <h2>{{ p.date }}</h2>
            <h4>Author: {{ p.author }}</h4>
            <img v-bind:src="p.image" class="responsive-img" />
            <p>{{ p.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        post() {
            return this.$store.getters.getOnePost;
        }
    },
    mounted() {
        this.$store.dispatch("getOnePost", this.$route.params.postId);
    }
};
</script>

<style></style>
