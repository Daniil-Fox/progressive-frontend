import {RootState} from "app/providers/StoreProvider/config/store";
import {StateSchema} from "app/providers/StoreProvider/config/stateSchema";

export const getLoginFormLoading = (state: StateSchema) => state?.loginForm?.isLoading || false