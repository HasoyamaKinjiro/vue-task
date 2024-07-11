<script setup>
import { defineProps, defineModel } from 'vue';

const model = defineModel();

defineProps({
    type: {
        type: String,
        default: 'text',
        validator: (value) => [
            'text',
            'textarea',
            'password',
            'tel',
            'email'
        ].includes(value)
    },
    modelValue: String,
    placeholder: String
});
</script>

<template>
    <div>
        <input
            v-if="type !== 'textarea'"
            v-model="model"
            :type="type"
            :placeholder="placeholder"
            class="form-control"
        />
        <textarea
            v-else
            v-model="model"
            :placeholder="placeholder"
            rows="3"
            class="form-control"
        />
    </div>
</template>
