import {RootState} from "app/providers/StoreProvider";

export const getArticlePageInited = (state: RootState) => state?.articlesPage?._inited || false;
