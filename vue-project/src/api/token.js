export default {
    setToken(token) {
        localStorage.setItem('userToken', token)
    },
    getToken() {
        return localStorage.getItem('userToken')
    }
}