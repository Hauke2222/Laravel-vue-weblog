<template>
    <div>
        <form @submit.prevent="submit" enctype="multipart/form-data">
            <div class="form-group">
                <select v-model="categories" id="categories" multiple>
                    <option
                        v-for="(c, index) in categoriesFromStore"
                        :key="index"
                        v-bind:value="c.id"
                        >{{ c.name }}</option
                    >
                </select>
            </div>
        </form>
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
            if (this.categories.length > 0) {
                // selecteer alle posts waarvan in deze post ten minste 1 categorie voorkomt in de door de
                // bezoeker geselecteerde categorieen
                var intersections = this.$store.getters.getPosts.filter(
                    post => this.categories.indexOf(post) !== -1
                );
                console.log(intersections);
                return null;

                // return this.$store.getters.getPosts.filter(post =>
                //     this.categories.includes(post.categories[0].id)

                // );
            }
            return this.$store.getters.getPosts;
        },
        categoriesFromStore() {
            return this.$store.getters.getCategories;
        }
    },
    data() {
        return {
            categories: []
        };
    },
    methods: {
        // submit() {
        //     this.posts = this.posts.filter(
        //         post => post.categories == this.categories
        //     );
        // }
    },
    mounted() {
        this.$store.dispatch("getAllPosts");
        this.$store.dispatch("getCategories");
    }
};
</script>
<style></style>
