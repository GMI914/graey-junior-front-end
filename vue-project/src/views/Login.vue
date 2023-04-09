<template>
    <BaseWrapper>
        <label for="Email">Email:</label>
        <input type="email" name="Email" id="Email" :value="userForm.username" @input="inputEmail"> <br>
        <p style="color: red" v-if="errors['username'] && errors['username'].length" v-for="err in errors['username']"
            :key="err">{{
                err }}</p>
        <label for="Password">Password:</label>
        <input type="password" name="Password" id="Password" :value="userForm.password" @input="inputPassword"><br>
        <p style="color: red" v-if="errors['password'] && errors['password'].length" v-for="err in errors['password']"
            :key="err">{{
                err }}</p>
        <button @click="login">Login</button>
        <p style="color: red" v-if="errors['non_field_errors'] && errors['non_field_errors'].length"
            v-for="err in errors['non_field_errors']" :key="err">{{
                err }}</p>
    </BaseWrapper>
</template>

<script>
import BaseWrapper from '../components/layout/BaseWrapper.vue'
import { ajax, apiUrls } from '../api/urls'
import token from '../api/token'

export default {
    name: "LoginPage",
    components: {
        BaseWrapper
    },
    props: {
        userData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            userForm: {
                username: '',
                password: ''
            },
            errors: {}
        }
    },
    methods: {
        inputEmail(e) {
            this.userForm.username = e.target.value
        },
        inputPassword(e) {
            this.userForm.password = e.target.value
        },
        login() {
            return ajax
                .post(apiUrls.login, this.userForm)
                .then(response => {
                    token.setToken(response.data.token)

                    const route = this.$route.query.nextUrl || { name: 'home' }

                    this.$emit('updateUserData', { route: route })
                    this.errors = {}
                })
                .catch(err => {
                    this.errors = err.response.data
                })
        }
    }
}
</script>