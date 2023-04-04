<template>
    <BaseWrapper>
        <input type="email" :value="registrationData.email" @input="inputEmail" name="testEmail"> <br>
        <p style="color: red" v-if="errors['email'] && errors['email'].length" v-for="err in errors['email']" :key="err">{{
            err }}</p>
        <input type="password" :value="registrationData.password" @input="inputPassword" name="testPassword"> <br>
        <p style="color: red" v-if="errors['password'] && errors['password'].length" v-for="err in errors['password']"
            :key="err">{{ err }}</p>
        <button @click="register">register</button> <br>

        <button @click="getUser">get user data</button>
    </BaseWrapper>
</template>

<script>
import BaseWrapper from '../components/layout/BaseWrapper.vue'
import { ajax, authAjax, apiUrls } from '../api/urls'
import token from '../api/token'

export default {
    name: 'RegisterPage',
    components: {
        BaseWrapper
    },
    data() {
        return {
            registrationData: {
                email: '',
                password: '',
                password2: '',

                company_name: 'test user',
                first_name: 'test',
                last_name: 'user',
                phone: '000000000',
            },
            errors: {}
        }
    },
    methods: {
        inputEmail(e) {
            this.registrationData.email = e.target.value
        },
        inputPassword(e) {
            this.registrationData.password = e.target.value
        },
        register() {
            this.registrationData.password2 = this.registrationData.password
            return ajax
                .post(apiUrls.register, this.registrationData)
                .then(response => {
                    token.setToken(response.data.token)
                    this.getUser()
                    this.errors = {}
                })
                .catch(err => {
                    this.errors = err.response.data
                })
        },
        getUser() {
            return authAjax()
                .get(apiUrls.userData)
                .then(response => {
                    console.log(response.data)
                })
        }
    }
}
</script>