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
    name: "article",
    initialState,
    reducers: {
    },
    selectors: {
        getIsLoading: (state) => state.isLoading,
        getError: (state) => state.error,
        getData: (state) => state.data
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

export const {actions: articleActions} = articleSlice;
export const {reducer: articleReducer} = articleSlice;
export const {selectors: articleSelectors} = injectedProfile;

declare module 'app/providers/StoreProvider/config/rootReducer' {
    interface LazyLoadedSlices extends WithSlice<typeof articleSlice> {}
}