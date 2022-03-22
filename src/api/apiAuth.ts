import axios from "axios";
import Cookies from 'js-cookie'


const getToken = () => {
    if (Cookies.get('jwt')) {
        return Cookies.get('jwt')
    } else {
        console.log('error get token');
        return ''
    }
}


const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
        Authorization: `${getToken() && `Bearer ${getToken()}`}`
    }
})


const apiAuth = {
    authUser(id: string) {
        return instance.get(`users/${id}`)
    },
    loginUser(data: any) {
        return instance.post('login', data)
    },
    registerUser(data: any) {
        return instance.post('register', data)
    }

}

export default apiAuth
