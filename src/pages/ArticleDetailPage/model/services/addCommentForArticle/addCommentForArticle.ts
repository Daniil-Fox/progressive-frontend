import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Comment} from "entities/Comment";
import {getUserAuthData} from "entities/User";
import {
    fetchCommentsByArticleId
} from "./../fetchCommentsByArticleId/fetchCommentsByArticleId";
import {getData} from "entities/Article";



export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {extra, rejectWithValue, getState, dispatch} = thunkAPI;
        const userData = getUserAuthData(getState())
        const articleId = getData(getState())?.id

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