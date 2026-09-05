import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticlesPageFilters} from './ArticlesPageFilters';


const meta = {
    component: ArticlesPageFilters,
    title: 'enteties/ArticlesPageFilters',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
