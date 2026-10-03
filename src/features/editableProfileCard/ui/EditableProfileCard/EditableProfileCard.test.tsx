import {screen} from "@testing-library/react";
import {EditableProfileCard} from "./EditableProfileCard";
import {renderWithStore} from "shared/lib/tests/renderWithStore/renderWithStore";
import {Profile} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {userEvent} from "@testing-library/user-event";
import {$api} from "shared/api/api";

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    username: 'admin123',
    avatar: '',
    city: 'Moscow',
    currency: Currency.RUB,
    country: Country.Russia,
    age: 23
}

const options = {
    profile: {
        readonly: true,
        data: profile,
        form: profile,
        validateError: [],
        isLoading: false,
        error: undefined
    },
    user: {
        authData: {id: '1', username: 'admin123', avatar: ''},
        _inited: true
    }
}

describe("EditableProfileCard", () => {
    test('test edit btn', async () => {
        renderWithStore(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.editbtn'))
        expect(screen.getByTestId('EditableProfileCardHeader.cancelbtn')).toBeInTheDocument();
    })

    test('test cancel btn', async () => {
        renderWithStore(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.editbtn'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.cancelbtn'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'admin')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'admin')
    })

    test('test validation btn', async () => {
        renderWithStore(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.editbtn'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.applybtn'))

        expect(screen.getByTestId('EditableProfileCardError')).toBeInTheDocument()
    })

    test('test success updating', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        renderWithStore(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.editbtn'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'other')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.applybtn'))

        expect(mockPutReq).toHaveBeenCalled()
        mockPutReq.mockRestore()
    })

})