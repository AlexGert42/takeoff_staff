import { combineReducers } from "redux"
import ThunkMiddleware from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from "@context/redusers/authReducer"
import { appReducer } from "@context/redusers/appReducer"
import { contactsReducer } from "@context/redusers/contactsReducer"


const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    contacts: contactsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(ThunkMiddleware)
})

export type AppRootState = ReturnType<typeof rootReducer>
