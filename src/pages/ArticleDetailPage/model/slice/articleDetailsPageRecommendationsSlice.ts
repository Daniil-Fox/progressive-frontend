import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "app/providers/StoreProvider";

import {
    ArticleDetailsRecommendationsSchema
} from "./../types/ArticleDetailsRecommendationsSchema";
import {Article} from "entities/Article";
import {
    fetchArticlesRecommendations
} from "./../services/fetchArticleRecommendations/fetchArticleRecommendations";


const recommendationsAdapter = createEntityAdapter<Article, string>({
    selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<RootState>(
    (state) => state?.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

export const articleDetailsPageRecommendationsSlice = createSlice({
    name: "recommendations",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchArticlesRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})
