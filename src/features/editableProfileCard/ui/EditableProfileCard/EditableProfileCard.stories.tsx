import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {EditableProfileCard} from './EditableProfileCard';
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import ava from "shared/assets/tests/ava.jpg";


const meta = {
    component: EditableProfileCard,
    title: 'features/EditableProfileCard',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Readonly: Story = {
    args: {
        id: '1',
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
            readonly: true
        }
    })]
};

export const Editable: Story = {
    args: {
        id: '1',
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
