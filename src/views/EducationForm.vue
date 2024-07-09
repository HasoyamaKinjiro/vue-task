<script setup>
import { computed, reactive } from 'vue';

const review = reactive({
    author: '',
    stars: null,
    text: '',
    photo: null
});

const submit = () => {
    console.log(review);
};

const previewFilePath = computed(() => {
    if (review.photo) {
        return URL.createObjectURL(review.photo);
    }

    return '#';
});

const uploadFile = (e) => {
    const [file] = e.target.files;
    review.photo = file;
};
</script>

<template>
    <form
        @submit.prevent.stop="submit"
        class="education-form-container"
    >
        <ul class="education-form">
            <li class="education-form-item">
                <input
                    type="text"
                    v-model="review.author"
                    placeholder="Into your name..."
                    class="form-control"
                />
            </li>
            <li class="education-form-item">
            <textarea
                rows="3"
                v-model="review.text"
                placeholder="Enter your review..."
                class="form-control"
            />
            </li>
            <li class="education-form-item">
                <div class="input-group">
                    <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                        @change="uploadFile"
                    />

                    <img :src="previewFilePath" alt="" class="w-100 mt-2">
                </div>
            </li>
        </ul>
        <div class="btn-group" role="group" aria-label="Star rating">
            <div v-for="star in 5" :key="star">
                <input
                    type="radio"
                    class="btn-check"
                    :id="'star' + star"
                    :value="star"
                    v-model="review.stars"
                    autocomplete="off"
                />
                <label class="btn border border-0" :for="'star' + star">
                    <svg width="24" height="24">
                        <use
                            :href="review.stars >= star
                                ? '/img/icons.62521743.svg#star-fill'
                                : '/img/icons.62521743.svg#star'"
                        ></use>
                    </svg>
                </label>
            </div>
        </div>
        <div>
            <button
                class="mt-4 btn btn-primary"

            >
                Send
            </button>
        </div>
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
