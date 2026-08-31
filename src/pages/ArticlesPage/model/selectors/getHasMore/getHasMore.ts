import {RootState} from "app/providers/StoreProvider";

export const getHasMore = (state: RootState) => state?.articlesPage?.hasMore
