import {useAppSelector} from "shared/lib/store/hooks/hooks";
import {RootState} from "app/providers/StoreProvider/config/store";

export const getUserInited = (state: RootState) => state.user._inited