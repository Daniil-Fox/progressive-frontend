import {RootState} from "app/providers/StoreProvider";

export const getLimit = (state: RootState) => state?.articlesPage?.limit
