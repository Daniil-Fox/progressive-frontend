import {RootState} from "app/providers/StoreProvider";

export const getArticlePageSearch = (state: RootState) => state?.articlesPage?.search ?? '';
