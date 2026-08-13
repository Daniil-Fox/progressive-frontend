import type {Meta, StoryObj} from '@storybook/react-webpack5';

import ProfilePage from './ProfilePage';
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "entities/Country/model/types/country";
import {Currency} from "entities/Currency/model/types/CurrencySchema";
import ava from "shared/assets/tests/ava.jpg";


const meta = {
    component: ProfilePage,
    title: 'pages/ProfilePage',
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        profile: {
            form: {
                first: 'Daniil',
                lastname: "Artyushenko",
                age: 23,
                country: Country.Russia,
                currency: Currency.RUB,
                city: "Moscow",
                username: "fox0nes",
                avatar: ava
            },
            isLoading: false,
            readonly: false
        }
    })]
};
