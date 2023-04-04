import axios from 'axios'
import token from './token'

export const ajax = axios.create({
    baseURL: 'https://stagingbpo.thecontractchair.co.uk/'
})

export const authAjax = () => {
    const userToken = token.getToken()
    if (userToken) {
        ajax.defaults.headers.common.Authorization = `Token ${userToken}`
    }

    return ajax
}

export const apiUrls = {
    login: '/rest/user/api-token-auth/',
    register: '/rest/user/register/',
    userData: '/rest/user/detail/',
    product: '/rest/widgets/product/',
    productDetail: (productSlug) => `/rest/store/products/${productSlug}/`,
}