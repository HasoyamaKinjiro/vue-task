<script>
import GlobalLayout from '@/components/GlobalLayout';

export default {
    name: 'App',
    components: { GlobalLayout }
};
</script>

<template>
    <GlobalLayout>
        <div id="app">
            <router-view />
        </div>
    </GlobalLayout>
</template>
