export default {
    namespaced: true,
    state() {
        return {
            categoryList: []
        }
    },
    mutations: {
        setCategoryList(state, data) {
            state.categoryList = data
        }
    },
    actions: {
        getCategoryList({ commit }) {
            commit('setData', { key: 'productList', value: 'giorgi', module: 'product' })
        }
    },
    getters: {
        categoryList(state) {
            return state.categoryList
        }
    }
}