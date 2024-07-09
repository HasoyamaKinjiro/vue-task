<script setup>
import { ref, computed } from "vue";

const count = ref(0); //ref its obj, so we need refer to his value

const increment = () => {
    return count.value++;
};


const users = ref([
    {
        id: 1,
        name: 'Adam',
        age: 22
    },
    {
        id: 2,
        name: 'Eve',
        age: 21
    }
]);


const products = ref([
    'Apple', 'Banana', 'Cucumber', 'Strawberry', 'Chocolate', 'Milk'
]);

const query = ref('');

const queryProducts = computed(() => {
    return products.value.filter((product) => product.toLowerCase().indexOf(query.value) !== -1);
});


const products2 = ref([
    {
        title: 'Apple',
        price: '20.19'
    },
    {
        title: 'Banana',
        price: '25.39'
    },
    {
        title: 'Cucumber',
        price: '17.18'
    },
    {
        title: 'Strawberry',
        price: '21.76'
    },
    {
        title: 'Chocolate',
        price: '28.17'
    },
    {
        title: 'Milk',
        price: '14.99'
    }
]);

const query2 = ref('');

const queryProducts2 = computed(() => {
    let p = products2.value;
    let search = query2.value;

    if (search) {
        p = p.filter((product) => {
            return product.title.toLowerCase().indexOf(query2.value) !== -1
                || product.price.toLowerCase().indexOf(query2.value) !== -1
        });
    }

    return p;
});

</script>

<template>
    <div class="education">
        <div>
            <button @click="increment">
                Count:
                <strong>{{ count }}</strong>
            </button>
        </div>
        <ul>
            <li
                v-for="user in users"
                :key="user.id"
                v-show="user.age !== 21"
            >

                {{ user.name }}
                <!-- v-if - must not use with v-for -->
                <sup v-if="user.age === 21">
                    {{ user.age }}
                </sup>
            </li>
        </ul>
        <ul>
            <li
                v-for="user in users"
                :key="user.id"
                :class="{
                    red: user.age > 21,
                    fz_24: user.name === 'Eve'
                }"
            >
                {{ user.name }}
                <br>
                <span> Age: {{ user.age }} </span>
            </li>
        </ul>
        <div>
            <input
                type="search"
                placeholder="Search products.."
                v-model="query"
            >
            <br><br>
            <ul>
                <li
                    v-for="product in queryProducts"
                    :key="product"
                >
                    {{ product }}
                </li>
            </ul>
        </div>
        <div>
            <input
                type="search"
                placeholder="Search products.."
                v-model="query2"
            >
            <br><br>
            <ul>
                <li
                    v-for="product in queryProducts2"
                    :key="product.title"
                >
                    {{ product.title }} - {{ product.price }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.education {
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.education > * {
    padding-bottom: 10px;
    border-bottom: 1px solid #0056b3;
}

.red {
    color: #dc3545;
}

.fz_24 {
    font-size: 24px;
}

</style>
