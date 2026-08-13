import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile, ValidateProfileError} from "../../types/profile";
import {profileSelectors} from "entities/Profile";
import {validateProfile} from "./../validateProfile/validateProfile";



export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;
        const formData = profileSelectors.getProfileForm(getState())
        const errors = validateProfile(formData)

        if(errors.length){
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            if(!response.data){
                throw new Error()
            }

            return response.data
        } catch(e){
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)