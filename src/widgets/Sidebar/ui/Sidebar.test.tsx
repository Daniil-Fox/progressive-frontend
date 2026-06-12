import {fireEvent, render, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {renderWithTranslation} from "shared/lib/helpers/renderWithTranslation/renderWithTranslation";


describe("Sidebar", () => {
    test('test', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        const toggleBtn = screen.getByTestId('toggle-sidebar-btn')

        fireEvent.click(toggleBtn)

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})