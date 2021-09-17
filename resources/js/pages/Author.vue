<template>
    <div>
        <ul id="cardList" v-for="(p, index) in posts" :key="index">
            <br />
            <div class="center">
                <div class="card">
                    <li class="card-li">
                        <router-link
                            :to="{
                                name: 'Show',
                                params: { postId: p.id, title: p.title }
                            }"
                        >
                            <div class="post-card-img">
                                <img
                                    v-bind:src="p.image"
                                    class="post-card-img"
                                />
                            </div>
                            <div class="post-card-title">{{ p.title }}</div>
                            <div
                                v-for="(c, index) in p.categories"
                                :key="index"
                            >
                                {{ p.categories[index].name }}
                            </div>
                            <div class="post-card-author-date">
                                {{ p.author + p.date }}
                            </div>
                        </router-link>
                        <router-link
                            :to="{
                                name: 'Edit',
                                params: { postId: p.id }
                            }"
                        >
                            <button>
                                <span style="font-size:25px;">&#9998;</span>
                            </button>
                        </router-link>
                        <router-link
                            :to="{
                                name: '',
                                params: { postId: p.id }
                            }"
                        >
                            <button>
                                <span style="font-size:28px;">&#10007;</span>
                            </button>
                        </router-link>
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
            return this.$store.getters.getAuthorsPosts.posts;
        }
    },
    mounted() {
        this.$store.dispatch("getAuthorsPosts");
    }
};
</script>

<style></style>
