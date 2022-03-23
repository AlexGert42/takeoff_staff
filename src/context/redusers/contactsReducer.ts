import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type TypeContacts = {
    name: string
    phone: string
    organization: string
}



interface TypeInitialState {
    contscts: null | Array<TypeContacts>
}


const initialState = {
    contscts: null
} as TypeInitialState


const slice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {

    }
})


export const contactsReducer = slice.reducer

// export const { ActiveOwerlay } = slice.actions