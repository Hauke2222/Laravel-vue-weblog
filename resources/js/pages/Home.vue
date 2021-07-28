<template>
    <div>
        <div v-for="(p, index) in posts" :key="index">
            {{ p.title + ": " + p.content + " " + p.date }}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$store.getters.getPosts;
        }
    },
    mounted() {
        this.$store.dispatch("getAllPosts");
    }
};
</script>
