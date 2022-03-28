import { TypeLoginData, TypeRegisterValidData } from '@/types/index';
import { authorization } from "@utils/index";
import axios from "axios";
import Cookies from 'js-cookie'

const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

const apiAuth = {
    authUser(id: string) {
        return instance.get(`users/${id}`, authorization())
    },
    async loginUser(data: TypeLoginData) {
        const dataUser = await instance.post('login', data)
        Cookies.set('jwt', dataUser.data.accessToken)
        localStorage.setItem('user', dataUser.data.user.id)
        await this.authUser(dataUser.data.user.id)
        return dataUser
    },
    async registerUser(data: TypeRegisterValidData) {
        const newUser = await instance.post('register', data)
        Cookies.set('jwt', newUser.data.accessToken)
        localStorage.setItem('user', newUser.data.user.id)
        await this.authUser(newUser.data.user.id)
        return newUser
    }
}

export default apiAuth
