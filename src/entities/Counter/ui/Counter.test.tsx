import {renderWithStore} from "shared/lib/tests/renderWithStore/renderWithStore";
import {Counter} from "entities/Counter";
import {fireEvent, screen} from "@testing-library/react";

describe('Counter.test', () => {
    test('Counter ', () => {
        renderWithStore({children: <Counter/>, initialState: {
            counter: {
                value: 10
            }
        }})
        const valueElement = screen.getByTestId('value')
        expect(valueElement).toHaveTextContent('10');
    })
    test('Counter increment ', () => {
        renderWithStore({children: <Counter/>, initialState: {
            counter: {
                value: 10
            }
        }})
        const incrementBtn = screen.getByTestId('increment-btn')
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('11');
    })
    test('Counter decrement ', () => {
        renderWithStore({children: <Counter/>, initialState: {
            counter: {
                value: 10
            }
        }})
        const incrementBtn = screen.getByTestId('decrement-btn')
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('9');
    })
})