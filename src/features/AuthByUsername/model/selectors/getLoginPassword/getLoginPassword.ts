import {RootState} from "app/providers/StoreProvider/config/store";

export const getLoginPassword = (state: RootState) => state?.login?.password || ""