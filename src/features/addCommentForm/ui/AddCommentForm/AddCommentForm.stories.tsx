import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import AddCommentForm from './AddCommentForm';
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";


const meta = {
    component: AddCommentForm,
    title: 'features/AddCommentForm',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onSendComment: fn()
    },
    decorators: [
        StoreDecorator({})
    ]
};
