import { screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {userEvent} from '@testing-library/user-event'
import {renderWithStore} from "shared/lib/tests/renderWithStore/renderWithStore";

describe("Sidebar", () => {
    test('test', async () => {
        renderWithStore(<Sidebar/>, {})
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        const toggleBtn = screen.getByTestId('toggle-sidebar-btn')

        await userEvent.click(toggleBtn)

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})