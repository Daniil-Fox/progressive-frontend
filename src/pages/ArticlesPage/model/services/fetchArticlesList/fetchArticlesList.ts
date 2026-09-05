import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Article, ArticleType} from "entities/Article";
import {getLimit} from "./../../selectors/getLimit/getLimit";
import {getArticlePageSort} from "./../../selectors/getSort/getArticlePageSort";
import {getArticlePageOrder} from "./../../selectors/getArticlesOrder/getArticlesOrder";
import {getArticlePageSearch} from "./../../selectors/getArticlesSearch/getArticlesSearch";
import {getPage} from "./../../selectors/getPage/getPage";
import {addQueryParams} from "shared/lib/url/addQueryParams/addQueryParams";
import {getArticlePageType} from "./../../selectors/getArticlePageType/getArticlePageType";

interface FetchArticlesPageProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesPageProps, ThunkConfig<string>>(
    "articlesPage/articlefetchArticlesList",
    async (_, thunkApi) => {
        const {extra, rejectWithValue, getState} = thunkApi
        const page = getPage(getState());
        const limit = getLimit(getState());
        const sort = getArticlePageSort(getState())
        const order = getArticlePageOrder(getState())
        const search = getArticlePageSearch(getState())
        const type = getArticlePageType(getState())

        try {
            addQueryParams({
                sort, order, search, type
            })
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type
                }
            })

            if(!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e){
            return rejectWithValue('Something wrong with fetching ArticlesList')
        }
    }
)