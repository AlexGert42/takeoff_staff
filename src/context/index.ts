export { store } from '@context/store'

import { authUser, loginUser, logout, registerUser } from '@context/redusers/authReducer'
import { ActiveOwerlay } from '@context/redusers/appReducer'
import { getContacts, removeContact, editContact, setContact, searchContact, removeContacts } from '@context/redusers/contactsReducer'


export const ActionCreators = {
    authUser,
    loginUser,
    logout,
    registerUser,
    ActiveOwerlay,
    getContacts,
    removeContact,
    editContact,
    setContact,
    searchContact,
    removeContacts
}