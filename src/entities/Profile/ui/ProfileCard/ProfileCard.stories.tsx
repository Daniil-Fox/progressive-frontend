import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import ava from 'shared/assets/tests/ava.jpg'
import {ProfileCard} from './ProfileCard';
import {Country} from "entities/Country/model/types/country";
import {Currency} from "entities/Currency/model/types/CurrencySchema";


const meta = {
    component: ProfileCard,
    title: 'enteties/ProfileCard',
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            first: 'Daniil',
            lastname: "Artyushenko",
            age: 23,
            country: Country.Russia,
            currency: Currency.RUB,
            city: "Moscow",
            username: "fox0nes",
            avatar: ava
        }
    },
};
export const WithError: Story = {
    args: {
        error: "Something Wrong"
    },
};
export const Loading: Story = {
    args: {
        isLoading: true
    },
};
