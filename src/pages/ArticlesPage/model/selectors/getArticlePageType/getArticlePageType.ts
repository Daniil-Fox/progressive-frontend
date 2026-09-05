import {RootState} from "app/providers/StoreProvider";
import {ArticleType} from "entities/Article";

export const getArticlePageType = (state: RootState) => state?.articlesPage?.type ?? ArticleType.ALL;
