import {createSlice, PayloadAction, WithSlice} from "@reduxjs/toolkit";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";
import {updateProfileData} from "./../services/updateProfileData/updateProfileData";
import {DeepPartial} from "shared/types/DeepPartial";
import {Profile} from "entities/Profile";
import {ProfileSchema} from "./../types/profile";

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
    form: undefined,
    validateError: undefined,
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.validateError = undefined
            state.form = state.data
        },
        updateProfile: (state, action: PayloadAction<DeepPartial<Profile>>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileData.fulfilled,
                (
                    state, action: PayloadAction<Profile>
                ) => {
                    state.data = action.payload
                    state.form = action.payload
                    state.isLoading = false
                })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateError = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled,
                (
                    state, action: PayloadAction<Profile>
                ) => {
                    state.data = action.payload
                    state.form = action.payload
                    state.isLoading = false
                    state.readonly = true
                })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateError = action.payload
            })
    }
})

const injectedProfile = profileSlice.injectInto(rootReducer)

export const {actions: profileActions} = injectedProfile;
export const {reducer: profileReducer} = injectedProfile;

declare module 'app/providers/StoreProvider/config/rootReducer' {
    interface LazyLoadedSlices extends WithSlice<typeof profileSlice> {}
}