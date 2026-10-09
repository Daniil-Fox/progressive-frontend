import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {AxiosInstance} from "axios";
import {NavigateOptions} from "react-router-dom";
import type {RootState} from './store'
import type {AppDispatch} from './store'
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