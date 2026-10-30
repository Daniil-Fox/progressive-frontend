import {UserSchema} from "@/entities/User";
import {AxiosInstance} from "axios";
import type {AppDispatch, RootState} from './store'

export interface StateSchema {
    user: UserSchema;

    // Async reducers
    // loginForm?: LoginSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    // navigate?: (to: To, options?: NavigateOptions) => void | Promise<void>
}

export interface ThunkConfig<T> {
    state: RootState,
    dispatch: AppDispatch,
    rejectValue: T,
    extra: ThunkExtraArg
}