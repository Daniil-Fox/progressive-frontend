import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {ValidateProfileError} from "../../types/profile";
import {validateProfile} from "./../validateProfile/validateProfile";
import {profileSelectors} from "./../../slice/ProfileSlice";
import {Profile} from "entities/Profile";



export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;
        const formData = profileSelectors.getProfileForm(getState())
        const errors = validateProfile(formData)
        const profileId = formData?.id
        if(errors.length){
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData)

            if(!response.data){
                throw new Error()
            }

            return response.data
        } catch(e){
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)