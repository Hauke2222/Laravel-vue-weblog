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
                <input type="file" name="image" />
            </div>

            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: {
                title: "",
                date: "",
                author: "",
                content: ""
            },
            errors: {}
        };
    },
    methods: {
        submit() {
            this.$store.dispatch("createPost", this.fields);
        }
    }
};
</script>

<style></style>
