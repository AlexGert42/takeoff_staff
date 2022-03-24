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
    async loginUser(data: any) {
        const dataUser = await instance.post('login', data)
        console.log(dataUser);
        Cookies.set('jwt', dataUser.data.accessToken)
        localStorage.setItem('user', dataUser.data.user.id)
        await instance.get(`users/${dataUser.data.user.id}`, {
            headers: {
                Authorization: `Bearer ${dataUser.data.accessToken}`
            }
        })
        return dataUser
        // return instance.post('login', data).then(res => {
        //     Cookies.set('jwt', res.data.accessToken)
        //     localStorage.setItem('user', res.data.user.id)
        //     return instance.get(`users/${res.data.user.id}`, {
        //         headers: {
        //             Authorization: `Bearer ${res.data.accessToken}`
        //         }
        //     })
        // })
    },
    registerUser(data: any) {
        return instance.post('register', data)
    }

}

export default apiAuth
