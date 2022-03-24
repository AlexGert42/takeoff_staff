import apiAuth from "@api/apiAuth"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import Cookies from 'js-cookie'


import { ActiveOwerlay } from "./appReducer"



export const authUser = createAsyncThunk('auth/authUser', async (id: string, { getState, dispatch, rejectWithValue }) => {
    try {
        const res = await apiAuth.authUser(id)
        if (res.status === 200) {
            const data = {
                email: res.data.email,
                id: res.data.id,
                phone: res.data.phone,
                username: res.data.username
            }
            return { user: data }
        }
        return { user: null }
    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})


export const loginUser = createAsyncThunk('auth/loginUser', async (data: any, { getState, dispatch, rejectWithValue }) => {
    try {
        dispatch(ActiveOwerlay({ value: true }))
        const res = await apiAuth.loginUser(data)
        if (res.status === 200) {
            Cookies.set('jwt', res.data.accessToken)
            localStorage.setItem('user', res.data.user.id)
            dispatch(ActiveOwerlay({ value: false }))
            return { user: res.data.user }
        }
        dispatch(ActiveOwerlay({ value: false }))
        return { user: null }
    } catch (error) {

        return rejectWithValue({ errors: error })
    }
})

export const registerUser = createAsyncThunk('auth/registerUser', async (data: any, { getState, dispatch, rejectWithValue }) => {
    try {
        dispatch(ActiveOwerlay({ value: true }))
        const res = await apiAuth.registerUser(data)
        if (res.status === 201) {
            Cookies.set('jwt', res.data.accessToken)
            localStorage.setItem('user', res.data.user.id)
            dispatch(ActiveOwerlay({ value: false }))
            return { user: res.data.user }
        }
        dispatch(ActiveOwerlay({ value: false }))
        return { user: null }

    } catch (error) {

        return rejectWithValue({ errors: error })
    }
})



interface TypeInitialState {
    userData: any | null
    auth: boolean
}


const initialState = {
    userData: null,
    auth: false
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
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload.user) {
                return {
                    ...state,
                    auth: true,
                    userData: action.payload.user
                }
            }

        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.user) {
                return {
                    ...state,
                    auth: true,
                    userData: action.payload.user
                }
            }
        });
        builder.addCase(authUser.fulfilled, (state, action) => {
            if (action.payload.user) {
                return {
                    ...state,
                    auth: true,
                    userData: action.payload.user
                }
            }

        });

    }
})


export const authReducer = slice.reducer

export const { logout } = slice.actions