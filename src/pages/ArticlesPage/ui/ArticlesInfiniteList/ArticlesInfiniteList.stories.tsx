import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticlesInfiniteList} from './ArticlesInfiniteList';


const meta = {
    component: ArticlesInfiniteList,
    title: 'enteties/ArticlesInfiniteList',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticlesInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
