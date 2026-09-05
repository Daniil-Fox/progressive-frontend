import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getArticlePageInited} from "./../../selectors/getArticlePageInited/getArticlePageInited";
import {articlePageActions} from "./../../slices/articlesPageSlice";
import {fetchArticlesList} from "./../fetchArticlesList/fetchArticlesList";
import {SortOrder} from "shared/types/SortOrder";
import {ArticlesSortField, ArticleType} from "entities/Article";


export const initArticlesPage = createAsyncThunk<undefined, URLSearchParams, ThunkConfig<string>>(
    "articlesPage/initArticlesPage",
    async (searchParams, thunkApi) => {
        const {getState, dispatch} = thunkApi
        const inited = getArticlePageInited(getState())
        if(!inited){
            const orderFromUrl = searchParams.get('order') as SortOrder
            const sortFromUrl = searchParams.get('sort') as ArticlesSortField
            const searchFromUrl = searchParams.get('search')
            const typeFromUrl = searchParams.get('type') as ArticleType

            if(orderFromUrl){
                dispatch(articlePageActions.setOrder(orderFromUrl))
            }
            if(sortFromUrl){
                dispatch(articlePageActions.setSort(sortFromUrl))
            }
            if(searchFromUrl){
                dispatch(articlePageActions.setSearch(searchFromUrl))
            }
            if(typeFromUrl){
                dispatch(articlePageActions.setType(typeFromUrl))
            }

            dispatch(articlePageActions.initState())
            dispatch(fetchArticlesList({}))
        }
    }
)