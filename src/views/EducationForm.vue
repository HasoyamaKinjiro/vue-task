<script setup>
import { reactive } from 'vue';

const review = reactive({
    author: '',
    stars: null,
    text: '',
    photo: null
});

const submit = () => {
    console.log(review);
};
</script>

<template>
    <form
        @submit.prevent.stop="submit"
        class="education-form-container"
    >
        <ul class="education-form">
            <li class="education-form-item">
                <UInput
                    v-model="review.author"
                    placeholder="Into your name..."
                />
            </li>
            <li class="education-form-item">
                <UInput
                    type="textarea"
                    v-model="review.text"
                    placeholder="Enter your review..."
                />
            </li>
            <li class="education-form-item">
                <UFile v-model="review.file"/>
            </li>
        </ul>
        <div class="btn-group" role="group" aria-label="Star rating">
            <UStars v-model="review.stars"/>
        </div>
        <UButton>Send</UButton>
    </form>
</template>

<style scoped>
.education-form-container {
    width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.education-form {
    margin-top: 24px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.education-form-item {
    width: 350px;
}
</style>
