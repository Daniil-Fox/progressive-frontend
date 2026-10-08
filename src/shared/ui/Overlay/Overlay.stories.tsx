import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Overlay} from './Overlay';


const meta = {
    component: Overlay,
    title: 'entities/Overlay',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
