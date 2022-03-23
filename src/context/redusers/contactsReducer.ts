import { apiContacts } from "@api/index"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"



export const getContacts = createAsyncThunk('auth/getContacts', async (id: string, { getState, dispatch, rejectWithValue }) => {
    try {
        const res = await apiContacts.getContacts(id)
        if (res.status === 200) {
            return { contacts: res.data }
        }
        return { contacts: null }

    } catch (error) {

        return rejectWithValue({ errors: error })
    }
})


export const removeContact = createAsyncThunk('auth/removeContact', async (id: number, { getState, dispatch, rejectWithValue }) => {
    try {
        await apiContacts.deleteContact(id)
    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})

export const editContact = createAsyncThunk('auth/editContact', async (data: any, { getState, dispatch, rejectWithValue }) => {
    try {
        await apiContacts.editContact(data)
    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})

export const setContact = createAsyncThunk('auth/setContact', async (data: any, { getState, dispatch, rejectWithValue }) => {
    const newContact = {...data, userId: localStorage.getItem('user')}
    try {
        await apiContacts.setContact(newContact)
    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})

export const searchContact = createAsyncThunk('auth/searchContact', async (data: any, { getState, dispatch, rejectWithValue }) => {
    try {
        const res = await apiContacts.searchContact(data)
        console.log(res);
        
    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})




type TypeContacts = {
    name: string
    phone: string
    organization: string
    id: number
    userId: number
}

interface TypeInitialState {
    contacts: null | Array<TypeContacts>
}


const initialState = {
    contacts: null
} as TypeInitialState


const slice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getContacts.fulfilled, (state, action) => {
            return {
                ...state,
                contacts: action.payload.contacts
            }
        });
    }
})


export const contactsReducer = slice.reducer

export const { } = slice.actions