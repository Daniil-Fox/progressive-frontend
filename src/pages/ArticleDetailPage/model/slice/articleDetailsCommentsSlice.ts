import {createEntityAdapter, createSlice, PayloadAction, WithSlice} from "@reduxjs/toolkit";
import {Comment} from "entities/Comment";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";
import {RootState} from "app/providers/StoreProvider";
import {ArticleDetailsCommentSchema} from "../types/ArticleDetailsCommentSchema";
import {
    fetchCommentsByArticleId
} from "pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";


const commentsAdapter = createEntityAdapter<Comment, string>({
    selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<RootState>(
    (state) => state.articleDetailsCommentsSlice || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
    selectors: {
        getError: (state) => state.error,
        getIsLoading: (state) => state.isLoading
    }
})

const injectedArticleDetailsCommentsSlice = articleDetailsCommentsSlice.injectInto(rootReducer)

declare module "app/providers/StoreProvider/config/rootReducer" {
    interface LazyLoadedSlices extends WithSlice<typeof articleDetailsCommentsSlice>{}
}

export const {reducer: articleDetailsReducer} = articleDetailsCommentsSlice;
export const {selectors: articleDetailsSelectors} = injectedArticleDetailsCommentsSlice