import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Comment} from "entities/Comment";
import {RootState} from "app/providers/StoreProvider";
import {ArticleDetailsCommentSchema} from "./../types/ArticleDetailsCommentSchema";
import {
    fetchCommentsByArticleId
} from "./../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentsAdapter = createEntityAdapter<Comment, string>({
    selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<RootState>(
    (state) => state?.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

export const articleDetailsCommentsSlice = createSlice({
    name: "comments",
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

export const {selectors: articleDetailsSelectors} = articleDetailsCommentsSlice
