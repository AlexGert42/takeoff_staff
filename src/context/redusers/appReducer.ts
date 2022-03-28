import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TypeInitialState {
    owerlay: boolean
}

const initialState = {
    owerlay: false
} as TypeInitialState

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        ActiveOwerlay(state, action: PayloadAction<{value: boolean}>) {
            state.owerlay = action.payload.value
        },
    }
})

export const appReducer = slice.reducer

export const {ActiveOwerlay} = slice.actions