import {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore, RootState} from "app/providers/StoreProvider/config/store";
import {useNavigate} from "react-router-dom";

interface StoreProviderProps {
    children?: ReactNode
    initialStore?: Partial<RootState>
}

export const StoreProvider: FC<StoreProviderProps> = ({children, initialStore}) => {
    // const navigate = useNavigate()
    const store = createReduxStore(initialStore)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

