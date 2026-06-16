import {fireEvent, render, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {renderWithRouter} from "shared/lib/helpers/renderWithRouter/renderWithRouter";


describe("Sidebar", () => {
    test('test', () => {
        renderWithRouter(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        const toggleBtn = screen.getByTestId('toggle-sidebar-btn')

        fireEvent.click(toggleBtn)

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})