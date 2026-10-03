import {StoreProvider} from "app/providers/StoreProvider";
import {JSX, ReactNode} from "react";
import {RootState} from "app/providers/StoreProvider/config/store";
import {renderWithRouter} from "shared/lib/tests/renderWithRouter/renderWithRouter";


export const renderWithStore = (children: ReactNode, initialState: Partial<RootState> ) => {
    return renderWithRouter(
        <StoreProvider initialStore={initialState} >
            {children}
        </StoreProvider>
    )
}