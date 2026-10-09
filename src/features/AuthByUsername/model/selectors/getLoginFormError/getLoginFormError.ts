import {RootState} from "app/providers/StoreProvider";

export const getLoginFormError = (state: RootState) => state?.login?.error || ""