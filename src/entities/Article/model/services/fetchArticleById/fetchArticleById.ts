import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Article} from "./../../types/article";



export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (articleId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            if(!articleId){
                return rejectWithValue('method have not article id')
            }
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user'
                }
            } );

            if(!response.data){
                return rejectWithValue('NO DATA')
            }

            return response.data
        } catch(e){
            return rejectWithValue('error')
        }
    }
)