<template>
    <div class="padding">
        <div>
            <h1>{{ post.title }}</h1>
            <h2>{{ post.date }}</h2>
            <h4>Author: {{ post.author }}</h4>
            <img v-bind:src="post.image" class="responsive-img" />
            <p>Text: {{ post.content }}</p>
            <p>Comments:</p>
            <div v-for="(c, index) in post.comments" :key="index">
                {{
                    post.comments[index].id +
                        ": " +
                        post.comments[index].comment
                }}
            </div>
        </div>
        <br />
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
            <input type="hidden" name="post_id" v-model="fields.post_id" />

            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    computed: {
        post() {
            return this.$store.getters["posts/getOnePost"](
                parseInt(this.$route.params.postId)
            );
        }
    },
    mounted() {
        console.log(this.$store);
        this.$store.dispatch("posts/getOnePost", this.$route.params.postId);
    },
    data() {
        return {
            fields: {
                comment: "",
                post_id: this.$route.params.postId
            },
            errors: {}
        };
    },
    methods: {
        submit() {
            this.$store.dispatch("createComment", this.fields);
        }
    }
};
</script>

<style></style>
