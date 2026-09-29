import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {EditableProfileCardHeader} from './EditableProfileCardHeader';


const meta = {
    component: EditableProfileCardHeader,
    title: 'enteties/EditableProfileCardHeader',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
