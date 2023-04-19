import { createStore } from 'vuex'
import { authAjax, apiUrls } from '../api/urls'
import getters from './getters'
import product from './modules/product'
import category from './modules/category'

const store = createStore({

    modules: {
        product: product,
        category: category
    },

    state() {
        return {
            userData: {}
        }
    },

    mutations: {
        setData(state, { key, value, module }) {
            if (module) {
                state[module][key] = value
            }
            state[key] = value
        },
        setUserData(state, data) {
            state.userData = data
        },
    },

    actions: {
        getUserData({ commit }) {
            return authAjax()
                .get(apiUrls.userData)
                .then(response => {

                    commit('setUserData', response.data)

                    commit('setData', { key: 'userData', value: response.data })
                })
                .catch(e => { })
        }
    },

    getters: getters
})

export default store