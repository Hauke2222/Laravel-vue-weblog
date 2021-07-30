<template>
    <div class="card-body">
        <form>
            <div class="form-group">
                <label for="title">Titel</label>
                <input
                    type="text"
                    class="form-control"
                    name="title"
                    id="title"
                />
            </div>

            <div class="form-group">
                <label for="date">Datum</label>
                <input type="date" class="form-control" name="date" id="date" />
            </div>

            <div class="form-group">
                <label for="author">Auteur</label>
                <input
                    type="author"
                    class="form-control"
                    name="author"
                    id="author"
                />
            </div>

            <div class="form-group">
                <label for="content">Tekst</label>
                <textarea
                    class="form-control"
                    name="content"
                    id="content"
                    rows="5"
                ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script></script>

<style></style>
