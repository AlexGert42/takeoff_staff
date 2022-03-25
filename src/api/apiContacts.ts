import { store } from '@context/';
import { TypeContactData, TypeSearchContactData, TypeSetDataContact } from '@types/index';
import { authorization } from "@utils/index";
import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

type TypeSetContactData = TypeSetDataContact & {
    userId: string | null
}

const apiContacts = {
    getContacts(id: string) {
        return instance.get(`contacts/?userId=${id}`, authorization())
    },
    deleteContact(id: number) {
        return instance.delete(`contacts/${id}`, authorization())
    },
    editContact(data: TypeContactData) {
        return instance.put(`contacts/${data.id}`, data, authorization())
    },
    setContact(data: TypeSetContactData) {
        return instance.post('contacts/', data, authorization())
    },
    searchContact(data: TypeSearchContactData, userId: string) {
        return instance.get(`contacts?userId=${userId}&${data.currentSelect}_like=${data.data}`, authorization())
    }
}

export default apiContacts
