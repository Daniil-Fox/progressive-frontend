
import {StateSchema} from "app/providers/StoreProvider/config/stateSchema";

export const getLoginFormError = (state: StateSchema) => state?.loginForm?.error || ""