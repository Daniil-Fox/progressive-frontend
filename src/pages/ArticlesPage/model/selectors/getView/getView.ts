import {RootState} from "app/providers/StoreProvider";
import {ArticleView} from "entities/Article";

export const getView = (state: RootState) => state.articlesPage?.view || ArticleView.SMALL
