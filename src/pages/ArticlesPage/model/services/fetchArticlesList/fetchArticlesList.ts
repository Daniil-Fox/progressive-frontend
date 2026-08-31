import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Article} from "entities/Article";
import {getLimit} from "./../../selectors/getLimit/getLimit";

interface FetchArticlesPageProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesPageProps, ThunkConfig<string>>(
    "articlesPage/articlefetchArticlesList",
    async (props, thunkApi) => {
        const {extra, rejectWithValue, getState} = thunkApi
        const {page = 1} = props;
        const limit = getLimit(getState());

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page
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