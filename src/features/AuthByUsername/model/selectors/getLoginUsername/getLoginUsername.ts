import {RootState} from "app/providers/StoreProvider/config/store";

export const getLoginUsername = (state: RootState) => state?.loginForm?.username || ""