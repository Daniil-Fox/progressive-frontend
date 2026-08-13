import {LoginSchema} from '../types/loginSchema'
import {createSlice, PayloadAction, WithSlice} from "@reduxjs/toolkit";
import {loginByUsername} from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            // state.username = action.payload.username
            state.isLoading = false
        })
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
    selectors: {
        getLoginForm: state => state,
        getLoginFormUsername: state => state.username,
        getLoginFormPassword: state => state.password,
        getLoginFormIsLoading: state => state.isLoading,
        getLoginFormError: state => state.error
    }
})

export const {actions: loginActions} = loginSlice

export const {reducer: loginReducer} = loginSlice

const injectedLoginFormSlice = loginSlice.injectInto(rootReducer)

export const {getLoginFormUsername, getLoginFormPassword, getLoginFormIsLoading, getLoginFormError, getLoginForm} = injectedLoginFormSlice.selectors

declare module 'app/providers/StoreProvider/config/rootReducer' {
    export interface LazyLoadedSlices extends WithSlice<typeof loginSlice> {}
}