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
        <form v-on:submit.prevent="submit">
            <div class="form-group">
                <label for="content">Comment:</label>
                <textarea
                    class="form-control"
                    name="comment"
                    id="comment"
                    rows="5"
                    v-model="fields.comment"
                ></textarea>
            </div>
            <input type="hidden" name="post_id" :value="post.id" />

            <button type="submit" class="btn btn-primary">Send</button>
        </form>
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
    },
    data() {
        return {
            fields: {
                comment: "",
                post_id: ""
            },
            errors: {}
        };
    },
    methods: {
        submit() {
            const formData = new FormData();
            formData.append("comment", this.fields.comment);
            formData.append("post_id", this.fields.post_id);
            this.$store.dispatch("createComment", formData);
        }
    }
};
</script>

<style></style>
