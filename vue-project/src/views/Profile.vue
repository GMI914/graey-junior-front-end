<template>
    <BaseWrapper>
        <label for="first_name">First Name:</label>
        <input type="text" name="first_name" id="first_name" :value="localData.first_name" @input="inputUserName"> <br>
        <img v-if="localData.avatar" :src="localData.avatar.thumbnail" :alt="localData.first_name"> <br>
        <label for="avatar">Avatar:</label>
        <input type="file" name="avatar" id="avatar" @change="inputAvatar"> <br>
        <img v-if="fileInput" :src="fileInput.preview" :alt="localData.first_name"> <br>
        <button @click="save">Save</button>
    </BaseWrapper>
</template>

<script>
import BaseWrapper from '../components/layout/BaseWrapper.vue'
import { authAjax, apiUrls } from '../api/urls'

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
            localData: {},
            fileInput: null
        }
    },
    watch: {
        userData(value) {
            this.localData = { ...value }
        }
    },
    mounted() {
        this.localData = { ...this.userData }
    },
    methods: {
        inputUserName(e) {
            this.localData.first_name = e.target.value
        },
        inputAvatar(e) {
            const file = e.target.files || e.dataTransfer.files
            if (!file.length) {
                return
            }
            const render = new FileReader()
            render.onload = (e) => {
                const image = file[0]
                image.preview = e.target.result
                this.fileInput = image
            }
            render.readAsDataURL(file[0])
        },
        save() {
            const formData = new FormData()
            formData.append('first_name', this.localData.first_name)
            if (this.fileInput) {
                formData.append('avatar', this.fileInput)
            }

            return authAjax()
                .patch(apiUrls.userUpdate(this.userData.id), formData)
                .then(() => {
                    this.fileInput = null
                    this.$emit('updateUserData')
                })
        }
    }
}
</script>