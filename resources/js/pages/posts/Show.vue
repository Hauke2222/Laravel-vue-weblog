<template>
    <div>
        <div v-for="(p, index) in post" :key="index">
            <h1>{{ p.title }}</h1>
            <h2>{{ p.date }}</h2>
            <h4>Author: {{ p.author }}</h4>
            <img v-bind:src="p.image" class="responsive-img" />
            <p>{{ p.content }}</p>
        </div>
        <!-- <div v-for="(c, index) in comments" :key="index">
            comment: {{ c.comment }}
        </div> -->
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
