import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleSortSelector} from './ArticleSortSelector';


const meta = {
    component: ArticleSortSelector,
    title: 'enteties/ArticleSortSelector',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
