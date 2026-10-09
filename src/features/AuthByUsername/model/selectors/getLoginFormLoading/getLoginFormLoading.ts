import {RootState} from "app/providers/StoreProvider";

export const getLoginFormLoading = (state: RootState) => state?.login?.isLoading || false