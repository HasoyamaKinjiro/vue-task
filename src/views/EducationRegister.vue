<script setup>
import { reactive } from 'vue';

const validForm = reactive({
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
    password: {
        input: '',
        showPass: false
    },
    repeatPassword: {
        input: '',
        showPass: false
    },
    nameRules: [
        value => {
            if (value) return true;

            return 'Name is required.';
        },
        value => {
            if (value?.length <= 10) return true;

            return 'Name must be less than 10 characters.';
        }
    ],
    emailRules: [
        value => {
            if (value) return true;

            return 'E-mail is required.';
        },
        value => {
            if (/.+@.+\..+/.test(value)) return true;

            return 'E-mail must be valid.';
        }
    ],
    passwordRules: [
        value => {
            if (value) return true;

            return 'Password is required.';
        },
        value => {
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)) return true;

            return 'Password must contain at least 8 characters, ' +
                'including at least one digit, one lowercase and one uppercase letter';
        }
    ],
    passIdentityRule: [
        value => {
            if (value === validForm.password.input) return true;

            return 'Password mismatch';
        }
    ]
});

const toggleShowPass = (password) => {
    validForm[password].showPass = !validForm[password].showPass;
};

const onSubmit = () => {
    if (validForm.valid) {
        return console.log('Form data:', {
            firstname: validForm.firstname,
            lastname: validForm.lastname,
            email: validForm.email,
            password: validForm.password.input,
            repeatPassword: validForm.repeatPassword.input
        });
    }

};
</script>

<template>
    <v-form
        @submit.prevent
        v-model="validForm.valid"
        validate-on="submit"
        class="d-flex flex-column justify-content-center mt-9"
    >
        <v-container
            class="col-10 col-sm-9 col-md-6 col-xl-5 col-xxl-4 d-flex flex-column justify-content-center gap-2"
        >
            <v-text-field
                v-model="validForm.firstname"
                :rules="validForm.nameRules"
                label="First name"
                required
            />

            <v-text-field
                v-model="validForm.lastname"
                :rules="validForm.nameRules"
                label="Last name"
                required
            />

            <v-text-field
                v-model="validForm.email"
                :rules="validForm.emailRules"
                label="E-mail"
                required
            />

            <v-text-field
                v-model="validForm.password.input"
                :rules="validForm.passwordRules"
                :type="validForm.password.showPass ? 'text' : 'password'"
                label="Password"
                variant="outlined"
                required
            >
                <template #append-inner>
                    <v-icon
                        @click="toggleShowPass('password')"
                        :icon="validForm.password.showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    ></v-icon>
                </template>
            </v-text-field>

            <v-text-field
                v-model="validForm.repeatPassword.input"
                :rules="validForm.passIdentityRule"
                :type="validForm.repeatPassword.showPass ? 'text' : 'password'"
                label="Repeat password"
                variant="outlined"
                required
            >
                <template #append-inner>
                    <v-icon
                        @click="toggleShowPass('repeatPassword')"
                        :icon="validForm.repeatPassword.showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    ></v-icon>
                </template>
            </v-text-field>
            <div>
                <v-btn
                    variant="outlined"
                    type="submit"
                    @click="onSubmit"
                >
                    Send
                </v-btn>
            </div>
        </v-container>
    </v-form>
</template>
