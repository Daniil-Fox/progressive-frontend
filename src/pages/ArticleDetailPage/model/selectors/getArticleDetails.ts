import {RootState} from "app/providers/StoreProvider";

export const selectRecommendationsIsLoading = (state: RootState) =>
    state.articleDetailsPage?.recommendations?.isLoading ?? false;

export const selectRecommendationsError = (state: RootState) =>
    state.articleDetailsPage?.recommendations?.error;

export const selectCommentsIsLoading = (state: RootState) =>
    state.articleDetailsPage?.comments?.isLoading ?? false;

export const selectCommentsError = (state: RootState) =>
    state.articleDetailsPage?.comments?.error;
