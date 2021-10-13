<template>
    <div class="padding">
        <form @submit.prevent="submit" enctype="multipart/form-data">
            <div class="form-group">
                <select
                    class="select"
                    v-model="categories"
                    id="categories"
                    multiple
                >
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
                                {{ p.author + " " + p.date }}
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
                let intersections = this.$store.getters.getPosts.filter(
                    post =>
                        post.categories
                            .map(category => category.id)
                            .filter(postCategoryId =>
                                this.categories.includes(postCategoryId)
                            ).length > 0
                );

                return intersections;
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
    methods: {},
    mounted() {
        this.$store.dispatch("getAllPosts");
        this.$store.dispatch("getCategories");
    }
};
</script>
<style>
select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
}
</style>
