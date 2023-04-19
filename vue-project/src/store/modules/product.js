export default {
    namespaced: true,

    state() {
        return {
            productList: []
        }
    },
    mutations: {
        setProductList(state, data) {
            state.productList = data
        }
    },
    actions: {
        getProductList({ dispatch, commit, getters, rootGetters }) {
            commit('setData', { key: 'productList', value: 'giorgi', module: 'product' })
        }
    },
    getters: {
        productList(state) {
            return state.productList
        }
    }
}