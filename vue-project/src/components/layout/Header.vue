<template>
    <header>
        <div class="header-contect">
            <RouterLink class="logo" :to="{name: 'home'}">
                <img src="../../static/logo.png" alt="Veli Store Logo" height="30" width="84">
            </RouterLink>
            <SearchInput class="search-input" type="text" placeholder="რას ეძებთ?" />
            <HeaderButton>კალათა</HeaderButton>
            <HeaderButton>შესვლა</HeaderButton>
        </div>
    </header>
</template>

<script>
import SearchInput from '../UI/SearchInput.vue'
import HeaderButton from '../UI/HeaderButton.vue'
import { RouterLink } from 'vue-router'

export default {
    name: 'HeaderComponent',
    components: {
        SearchInput,
        HeaderButton,
        RouterLink
    }
}
</script>

<style scoped>
header {
    padding: 12px 20px;
    background-color: #B4D984;
    width: 100%;
}

.header-contect {
    display: flex;
    align-items: center;
    max-width: 1240px;
    margin: 0 auto;
}

.logo {
    margin: 5px;
    height: 30px;
}

.search-input {
    margin: 0 20px;
    flex-grow: 1;
    padding: 0 20px 0 70px;
}
</style>