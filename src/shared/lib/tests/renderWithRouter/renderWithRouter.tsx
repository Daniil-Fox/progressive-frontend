import { ReactNode} from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18nForTesting from "shared/config/i18n/i18nForTesting";



export const renderWithRouter = (children: ReactNode, route: string = "/") => {

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTesting}>
                {children}
            </I18nextProvider>
        </MemoryRouter>
    )
}