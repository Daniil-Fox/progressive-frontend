import {RootState} from "app/providers/StoreProvider";

export const getIsLoading = (state: RootState) => state.articleDetails?.isLoading;
export const getError = (state: RootState) => state.articleDetails?.error;
export const getData = (state: RootState) => state.articleDetails?.data;