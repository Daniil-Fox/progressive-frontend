import {StoreProvider} from "app/providers/StoreProvider";
import {JSX, ReactNode} from "react";
import {render} from "@testing-library/react";
import {DeepPartial} from "shared/types/DeepPartial";
import {RootState} from "app/providers/StoreProvider/config/store";
import {renderWithRouter} from "shared/lib/tests/renderWithRouter/renderWithRouter";

interface renderWithStoreProps {
    children: ReactNode;
    initialState?: Partial<RootState>;
}

export const renderWithStore = ({children, initialState}: renderWithStoreProps ) => {
    return renderWithRouter(
        <StoreProvider initialStore={initialState} >
            {children}
        </StoreProvider>
    )
}