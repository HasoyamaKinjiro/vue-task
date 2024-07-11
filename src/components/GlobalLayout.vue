<script setup>
import { ref } from 'vue';
import cornImage from '../assets/img/corn.jpg';

const paths = ref([
    {
        path: '',
        name: 'Home'
    },
    {
        path: 'education',
        name: 'Education'
    },
    {
        path: 'education/form',
        name: 'EducationForm'
    },
    {
        path: 'education/register',
        name: 'EducationRegister'
    }
]);
</script>

<template>
    <v-app>
        <v-app-bar
            :image="cornImage"
            class="app-bar"
        >
            <v-app-bar-title class="fs-4 fw-bold">Cine corn</v-app-bar-title>
            <template v-slot:append>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            v-bind="props"
                            icon="$menu"
                        />
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="({ path, name }, index) in paths"
                            :key="index"
                            :value="index"
                        >
                            <router-link :to="`/${path}`" class="v-list-item-title">
                                {{ name }}
                            </router-link>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-app-bar>
        <v-main>
            <slot/>
        </v-main>
    </v-app>
</template>

<style scoped>
.v-list-item-title {
    text-decoration: none;
    color: inherit;
}
</style>
