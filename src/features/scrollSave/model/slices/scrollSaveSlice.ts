import {createSlice, PayloadAction, WithSlice} from "@reduxjs/toolkit";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";
import {ScrollSaveSchema} from "./../types/scrollSaveSchema";

const initialState: ScrollSaveSchema = {
    scroll: {}
}

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        }
    }
})

export const {actions: scrollSaveActions} = scrollSaveSlice

export const {reducer: scrollSaveReducer} = scrollSaveSlice

const injectedScrollSaveSlice = scrollSaveSlice.injectInto(rootReducer)


declare module 'app/providers/StoreProvider/config/rootReducer' {
    export interface LazyLoadedSlices extends WithSlice<typeof scrollSaveSlice> {}
}