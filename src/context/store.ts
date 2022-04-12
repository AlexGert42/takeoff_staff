import { combineReducers } from "redux"
import ThunkMiddleware from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from "@context/redusers/authReducer"
import { appReducer } from "@context/redusers/appReducer"
import { contactsReducer } from "@context/redusers/contactsReducer"


const rootReducer = combineReducers({
    contacts: contactsReducer,
    auth: authReducer,
    app: appReducer
   
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(ThunkMiddleware)
})

export type AppRootState = ReturnType<typeof rootReducer>

export default store
