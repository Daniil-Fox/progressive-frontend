import {createSlice, PayloadAction, WithSlice} from "@reduxjs/toolkit";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";
import {ArticleDetailsSchema} from "./../types/articleDetailsSchema";
import {fetchArticleById} from "./../services/fetchArticleById/fetchArticleById";
import {Article} from "./../types/article";

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const articleSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchArticleById.pending, (state: ArticleDetailsSchema) => {
            state.isLoading = true
        })
        builder.addCase(fetchArticleById.fulfilled, (state: ArticleDetailsSchema, action: PayloadAction<Article>) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

const injectedProfile = articleSlice.injectInto(rootReducer)

export const {actions: articleActions} = injectedProfile;
export const {reducer: articleReducer} = articleSlice;

declare module 'app/providers/StoreProvider/config/rootReducer' {
    interface LazyLoadedSlices extends WithSlice<typeof articleSlice> {}
}