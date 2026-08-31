import {RootState} from "app/providers/StoreProvider";

export const getPage = (state: RootState) => state?.articlesPage?.page || 1
