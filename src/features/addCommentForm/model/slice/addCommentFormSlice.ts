import {createSlice, PayloadAction, WithSlice} from "@reduxjs/toolkit";
import {AddCommentFormSchema} from "./../types/addCommentFormSchema";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";

const initialState: AddCommentFormSchema = {
    text: '',
    error: undefined
}
export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState: initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>)=> {
            state.text = action.payload
        }
    },
    extraReducers: builder => {

    },
    selectors: {
        getText: (state) => state.text
    }
})

const injectedAddCommentFormSlice = addCommentFormSlice.injectInto(rootReducer)

export const {selectors: addCommentFormSelectors, actions: addCommentFormActions} = injectedAddCommentFormSlice;


declare module 'app/providers/StoreProvider/config/rootReducer' {
    interface LazyLoadedSlices extends WithSlice<typeof addCommentFormSlice>{}
}