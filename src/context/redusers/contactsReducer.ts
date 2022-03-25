import { TypeContactData, TypeSearchContactData, TypeSetDataContact } from '@types/index';
import { apiContacts } from "@api/index"
import { AppRootState } from "@context/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getContacts = createAsyncThunk('auth/getContacts', async (data: string, { getState, dispatch, rejectWithValue }) => {
    try { 
        const res = await apiContacts.getContacts(data)
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
        const res = await apiContacts.deleteContact(id)
        if (res.status === 200) {
            return {data: id}
        }
        return {data: null}
    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})

export const editContact = createAsyncThunk('auth/editContact', async (data: TypeContactData, { getState, dispatch, rejectWithValue }) => {
    try {
        const res = await apiContacts.editContact(data)
        if (res.status === 200) {
            return {data: res.data} 
        }
        return {data: null}

    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})

export const setContact = createAsyncThunk('auth/setContact', async (data: TypeSetDataContact, { getState, dispatch, rejectWithValue }) => {
    const newContact = { ...data, userId: localStorage.getItem('user') }
    try {
        const res = await apiContacts.setContact(newContact)
        if (res.status === 201) {
            return { data: res.data }
        }
        return { data: null }
    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})

export const searchContact = createAsyncThunk('auth/searchContact', async (data: TypeSearchContactData, { getState, dispatch, rejectWithValue }) => {
    const state = getState() as AppRootState
    try {
        const res = await apiContacts.searchContact(data, state.auth.userData.id)
        if (res.status === 200) {
            return {data: res.data}
        }
        return {data: null}
    } catch (error) {
        return rejectWithValue({ errors: error })
    }
})


interface TypeInitialState {
    contacts: null | Array<TypeContactData>
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
            if (!action.payload.contacts) {
                return state
            }
            return {
                ...state,
                contacts: action.payload.contacts
            }
        });
        builder.addCase(setContact.fulfilled, (state, action) => {
            if (!action.payload.data) {
                return state
            }
            if (state.contacts) {
                return {
                    ...state,
                    contacts: [...state.contacts, action.payload.data]
                }
            } else {
                return {
                    ...state,
                    contacts: [action.payload.data]
                }
            }
        });
        builder.addCase(editContact.fulfilled, (state, action) => {
            if (!action.payload.data) {
                return state
            }
            if (state.contacts) {
                const newContacts = state.contacts.map(item => {
                    if (item.id === action.payload.data.id) {
                        return action.payload.data
                    }
                    return item
                })
                return {
                    ...state,
                    contacts: newContacts
                }
            }
        });
        builder.addCase(removeContact.fulfilled, (state, action) => {
            if (!action.payload.data) {
                return state
            }
            if (state.contacts) {
                const newContacts = state.contacts.filter(item => item.id !== action.payload.data)
                return {
                    ...state,
                    contacts: newContacts
                }
            }
        });
        builder.addCase(searchContact.fulfilled, (state, action) => {
            if (!action.payload.data) {
                return state
            }
            return {
                ...state,
                contacts: action.payload.data
            }
            
        });

    }
})


export const contactsReducer = slice.reducer

export const { } = slice.actions