import {configureStore} from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "app/providers/StoreProvider/config/stateSchema";
import {rootReducer} from "./rootReducer";
import {$api} from "shared/api/api";
import {NavigateOptions, Path} from "react-router-dom";

export type To = string | Partial<Path>

export function createReduxStore(
    initialState?: Partial<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void | Promise<void>
) {

    const extraArgs: ThunkExtraArg = {
        api: $api,
        navigate
    }

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs
            }
        }),
    });
}


export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;