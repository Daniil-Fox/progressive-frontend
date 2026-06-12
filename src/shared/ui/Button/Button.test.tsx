import {render, screen} from "@testing-library/react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";


describe("button", () => {
    test('test', () => {
        render(<Button>Btn</Button>)
        expect(screen.getByText('Btn')).toBeInTheDocument()
    })
    test('clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Btn</Button>)

        expect(screen.getByText('Btn')).toHaveClass('clear')
    })
})