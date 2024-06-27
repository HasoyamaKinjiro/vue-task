<template>
    <div>
        <h2>Movies</h2>
        <ul>
            <li v-for="movie in movies" :key="movie.id">
                {{ movie.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movies: []
        };
    },
    mounted() {
        this.fetchMovies();
    },
    methods: {
        async fetchMovies() {
            try {
                const response = await fetch('https://cinema-api-test.y-media.io/v1/movies');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.movies = data;
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }
    }
};
</script>
