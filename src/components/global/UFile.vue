<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: File
});

const emits = defineEmits(['update:modelValue']);

const file = ref(props.modelValue);

const uploadFile = (e) => {
    const [selectedFile] = e.target.files;
    file.value = selectedFile;
    emits('update:modelValue', selectedFile);
};

const previewFilePath = computed(() => {
    if (file.value) {
        return URL.createObjectURL(file.value);
    }

    return '#';
});
</script>

<template>
    <div class="input-group">
        <input
            type="file"
            @change="uploadFile"
            class="form-control"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
        />
        <img :src="previewFilePath" alt="" class="w-100 mt-2">
    </div>
</template>
