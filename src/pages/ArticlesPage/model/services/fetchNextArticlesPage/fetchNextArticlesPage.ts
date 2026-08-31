import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getPage} from "./../../selectors/getPage/getPage";
import {getHasMore} from "./../../selectors/getHasMore/getHasMore";
import {getIsLoading} from "./../../selectors/getIsLoading/getIsLoading";
import {articlePageActions} from "./../../slices/articlesPageSlice";
import {fetchArticlesList} from "./../fetchArticlesList/fetchArticlesList";


export const fetchNextArticlesPage = createAsyncThunk<undefined, undefined, ThunkConfig<string>>(
    "articlesPage/articlesNextPage",
    async (_, thunkApi) => {
        const {getState, dispatch} = thunkApi
        const hasMore = getHasMore(getState())
        const page = getPage(getState());
        const isLoading = getIsLoading(getState());

        if(hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1))
            dispatch(fetchArticlesList({
                page: page + 1
            }))
        }
    }
)