import {RootState} from "app/providers/StoreProvider";
import {ArticlesSortField} from "entities/Article";

export const getArticlePageSort = (state: RootState) => state?.articlesPage?.sort || ArticlesSortField.TITLE;
