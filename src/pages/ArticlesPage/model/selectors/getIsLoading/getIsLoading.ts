import {RootState} from "app/providers/StoreProvider";

export const getIsLoading = (state: RootState) => state?.articlesPage?.isLoading
