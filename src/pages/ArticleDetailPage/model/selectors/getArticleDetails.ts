import {RootState} from "app/providers/StoreProvider";


export const selectCommentsIsLoading = (state: RootState) =>
    state.articleDetailsPage?.comments?.isLoading ?? false;

export const selectCommentsError = (state: RootState) =>
    state.articleDetailsPage?.comments?.error;
