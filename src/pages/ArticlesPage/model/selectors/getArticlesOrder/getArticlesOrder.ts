import {RootState} from "app/providers/StoreProvider";

export const getArticlePageOrder = (state: RootState) => state?.articlesPage?.order || 'asc';
