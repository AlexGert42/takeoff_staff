export { store } from '@context/store'

import { authUser, loginUser, logout, registerUser } from '@context/redusers/authReducer'
import { ActiveOwerlay } from '@context/redusers/appReducer'


export const ActionCreators = {
    authUser,
    loginUser,
    logout,
    registerUser,
    ActiveOwerlay
}