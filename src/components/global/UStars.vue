<script setup>
import { defineModel } from 'vue';

const maxRate = 5;

const model = defineModel();
</script>

<template>
    <div v-for="star in maxRate" :key="star">
        <input
            type="radio"
            class="btn-check"
            :id="'star' + star"
            :value="star"
            v-model="model"
            autocomplete="off"
        />
        <label class="btn border border-0" :for="'star' + star">
            <svg width="24" height="24">
                <use href="../../assets/icons.svg#star"/>
                <use
                    :href="model >= star
                        ? '/img/icons.62521743.svg#star-fill'
                        : '/img/icons.62521743.svg#star'"
                />
            </svg>
        </label>
    </div>
</template>
