<template>
    <div>
        <ul id="cardList" v-for="(p, index) in posts" :key="index">
            <br />
            <div class="center">
                <div class="card">
                    <li class="card-li">
                        <a href="#/show">
                            <div class="post-card-img">
                                <img
                                    v-bind:src="p.image"
                                    class="post-card-img"
                                />
                            </div>
                            <div class="post-card-title">{{ p.title }}</div>
                            <div class="post-card-author-date">
                                {{ p.author + p.date }}
                            </div>
                        </a>
                    </li>
                </div>
            </div>
            <br />
        </ul>
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
<style></style>
