import {RootState} from "app/providers/StoreProvider";

export const getProfileData = (state: RootState) => state.profile?.data;
export const getProfileForm = (state: RootState) => state.profile?.form;
export const getProfileError = (state: RootState) => state.profile?.error;
export const getProfileIsLoading = (state: RootState) => state.profile?.isLoading;
export const getProfileReadonly = (state: RootState) => state.profile?.readonly;
export const getValidateError = (state: RootState) => state.profile?.validateError;