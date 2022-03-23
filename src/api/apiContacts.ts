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


const apiContacts = {
    getContacts(id: string) {
        return instance.get(`contacts/?userId=${id}`)
    },
    deleteContact(id: number) {
        return instance.delete(`contacts/${id}`)
    },
    editContact(data: any) {
        return instance.put(`contacts/${data.id}`, data)
    },
    setContact(data: any) {
        return instance.post('contacts/', data)
    },
    searchContact(data: any) {
        return instance.get(`contacts?${data.currentSelect}=${data.data}`)
    },
    
}

export default apiContacts
