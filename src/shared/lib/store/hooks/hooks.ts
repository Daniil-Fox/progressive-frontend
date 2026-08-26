import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "app/providers/StoreProvider/config/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>()