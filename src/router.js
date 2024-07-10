import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MovieDetails from '@/views/MovieDetails.vue';
import EducationPage from '@/views/EducationPage.vue';
import EducationForm from '@/views/EducationForm.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/movie/:id',
        name: 'MovieDetails',
        component: MovieDetails,
        props: true
    },
    {
        path: '/education',
        name: 'EducationPage',
        component: EducationPage,
        props: true
    },
    {
        path: '/education/form',
        name: 'EducationForm',
        component: EducationForm,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
