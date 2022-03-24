import axios from "axios";
import Cookies from 'js-cookie'


const authorization = () => {
    if (Cookies.get('jwt')) {
        return {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        }
    } else {
        console.log('error get token');
        return {}
    }
}




const instance = axios.create({
    baseURL: 'http://localhost:5000/',
})


const apiContacts = {
    getContacts(id: string) {
        console.log('ID', id, 'AUTH', authorization());
        
        return instance.get(`contacts/?userId=${id}`, authorization())
    },
    deleteContact(id: number) {
        return instance.delete(`contacts/${id}`, authorization())
    },
    editContact(data: any) {
        return instance.put(`contacts/${data.id}`, data, authorization())
    },
    setContact(data: any) {
        return instance.post('contacts/', data, authorization())
    },
    searchContact(data: any, userId: number) {
        return instance.get(`contacts?userId=${userId}&${data.currentSelect}_like=${data.data}`, authorization())
    },

}

export default apiContacts
