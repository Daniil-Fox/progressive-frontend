import {configureStore} from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "app/providers/StoreProvider/config/stateSchema";
import {rootReducer} from "./rootReducer";
import {$api} from "shared/api/api";
import {rtkApi} from "shared/api/rtkApi";

export function createReduxStore(
    initialState?: Partial<StateSchema>
) {

    const extraArgs: ThunkExtraArg = {
        api: $api
    }

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs
            }
        }).concat(rtkApi.middleware),
    });
}


export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;