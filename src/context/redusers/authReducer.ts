import apiAuth from "@api/apiAuth"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import Cookies from 'js-cookie'
import { ActionCreators }  from "@context/index"
import { TypeRegisterValidData, TypeLoginData } from '@/types/index'


export const authUser = createAsyncThunk('auth/authUser', async (id: string, { getState, dispatch, rejectWithValue }) => {
    try {
        dispatch(ActionCreators.ActiveOwerlay({ value: true }))
        const res = await apiAuth.authUser(id)
        if (res.status === 200) {
            const data = {
                email: res.data.email,
                id: res.data.id,
                phone: res.data.phone,
                username: res.data.username
            }
            dispatch(ActionCreators.ActiveOwerlay({ value: false }))
            return { user: data }
        }
        dispatch(ActionCreators.ActiveOwerlay({ value: false }))
        return { user: null }
    } catch (error) {
        dispatch(ActionCreators.ActiveOwerlay({ value: false }))
        return rejectWithValue({ errors: error })
    }
})

export const loginUser = createAsyncThunk('auth/loginUser', async (data: TypeLoginData, { getState, dispatch, rejectWithValue }) => {
    try {
        dispatch(ActionCreators.ActiveOwerlay({ value: true }))
        const res = await apiAuth.loginUser(data)
        if (res.status === 200) {
            dispatch(ActionCreators.ActiveOwerlay({ value: false }))
            return { user: res.data.user }
        }
        dispatch(ActionCreators.ActiveOwerlay({ value: false }))
        return { user: null }
    } catch (error) {
        dispatch(ActionCreators.ActiveOwerlay({ value: false }))
        dispatch(setErrorLogin({value: error.message}))
        return rejectWithValue({ errors: error})
         
    }
})

export const registerUser = createAsyncThunk('auth/registerUser', async (data: TypeRegisterValidData, { getState, dispatch, rejectWithValue }) => {
    try {
        dispatch(ActionCreators.ActiveOwerlay({ value: true }))
        const res = await apiAuth.registerUser(data)
        if (res.status === 201) {
            dispatch(ActionCreators.ActiveOwerlay({ value: false }))
            return { user: res.data.user }
        }
        dispatch(ActionCreators.ActiveOwerlay({ value: false }))
        return { user: null }
    } catch (error) {
        dispatch(ActionCreators.ActiveOwerlay({ value: false }))
        dispatch(setErrorReg({value: error.message}))
        return rejectWithValue({ errors: error })
    }
})


interface TypeInitialState {
    userData: TypeRegisterValidData | null
    auth: boolean
    errorLogin: string
    errorReg: string
}

const initialState = {
    userData: null,
    auth: false,
    errorLogin: '',
    errorReg: ''
} as TypeInitialState

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout(state, action: PayloadAction) {
            Cookies.remove('jwt')
            localStorage.removeItem('user')
            state.auth = false
            state.userData = null
        },
        setErrorLogin(state, action: PayloadAction<{value: string}>) {
            state.errorLogin = action.payload.value
        },
        setErrorReg(state, action: PayloadAction<{value: string}>) {
            state.errorReg = action.payload.value
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload.user) {
                return {
                    ...state,
                    auth: true,
                    errorReg: '',
                    userData: action.payload.user
                }
            }
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.user) {
                return {
                    ...state,
                    auth: true,
                    errorLogin: '',
                    userData: action.payload.user
                }
            }
        });
        builder.addCase(authUser.fulfilled, (state, action) => {
            if (action.payload.user) {
                return {
                    ...state,
                    auth: true,
                    errorLogin: '',
                    errorReg: '',
                    userData: action.payload.user
                }
            }
        });
    }
})


export const authReducer = slice.reducer

export const { logout, setErrorReg, setErrorLogin } = slice.actions