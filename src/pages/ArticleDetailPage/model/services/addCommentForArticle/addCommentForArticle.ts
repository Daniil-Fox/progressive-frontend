import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Comment} from "entities/Comment";
import {getUserAuthData} from "entities/User";
import {articleSelectors} from "entities/Article";
import {
    fetchCommentsByArticleId
} from "./../fetchCommentsByArticleId/fetchCommentsByArticleId";



export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {extra, rejectWithValue, getState, dispatch} = thunkAPI;
        const userData = getUserAuthData(getState())
        const articleId = articleSelectors?.getData(getState())?.id

        if(!articleId || !text || !userData) {
            return rejectWithValue('no data')
        }

        try {
            const response = await extra.api.post<Comment>(`/comments`, {
                articleId,
                userId: userData.id,
                text
            })

            if(!response.data){
                throw new Error()
            }

            dispatch(fetchCommentsByArticleId(articleId))


            return response.data
        } catch(e){
            return rejectWithValue('error')
        }
    }
)