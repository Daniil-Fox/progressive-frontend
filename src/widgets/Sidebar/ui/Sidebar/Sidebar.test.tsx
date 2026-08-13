import { render, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {renderWithRouter} from "shared/lib/tests/renderWithRouter/renderWithRouter";
import cls from './Sidebar.module.scss'
import {userEvent} from '@testing-library/user-event'

describe("Sidebar", () => {
    test('test', async () => {
        renderWithRouter(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        const toggleBtn = screen.getByTestId('toggle-sidebar-btn')

        await userEvent.click(toggleBtn)

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})