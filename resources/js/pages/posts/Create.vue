<template>
    <div class="card-body">
        <form v-on:submit.prevent="submit">
            <div class="form-group">
                <label for="title">Titel</label>
                <input
                    type="text"
                    class="form-control"
                    name="title"
                    id="title"
                    v-model="fields.title"
                />
            </div>

            <div class="form-group">
                <label for="date">Datum</label>
                <input
                    type="date"
                    class="form-control"
                    name="date"
                    id="date"
                    v-model="fields.date"
                />
            </div>

            <div class="form-group">
                <label for="author">Auteur</label>
                <input
                    type="author"
                    class="form-control"
                    name="author"
                    id="author"
                    v-model="fields.author"
                />
            </div>
            <div class="form-group">
                <select v-model="fields.categories" id="categories" multiple>
                    <option
                        v-for="(c, index) in categoriesFromStore"
                        :key="index"
                        v-bind:value="c.id"
                        >{{ c.name }}</option
                    >
                </select>
            </div>

            <div class="form-group">
                <label for="content">Tekst</label>
                <textarea
                    class="form-control"
                    name="content"
                    id="content"
                    rows="5"
                    v-model="fields.content"
                ></textarea>
            </div>

            <div class="form-group">
                <label for="image"></label>
                <input type="file" name="image" @change="saveImg" />
            </div>

            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    computed: {
        categoriesFromStore() {
            return this.$store.getters.getCategories;
        }
    },
    data() {
        return {
            fields: {
                title: "",
                date: "",
                author: "",
                content: "",
                image: "",
                categories: []
            },
            errors: {}
        };
    },
    methods: {
        submit() {
            const formData = new FormData();
            formData.append("image", this.fields.image);
            formData.append("title", this.fields.title);
            formData.append("date", this.fields.date);
            formData.append("author", this.fields.author);
            formData.append("content", this.fields.content);
            formData.append("categories", this.fields.categories);
            this.$store.dispatch("createPost", formData);
        },
        saveImg(event) {
            this.fields.image = event.target.files[0];
        }
    },
    mounted() {
        this.$store.dispatch("getCategories");
    }
};
</script>

<style></style>
