import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleSortSelector} from './ArticleSortSelector';
import {ArticlesSortField} from "entities/Article";


const meta = {
    component: ArticleSortSelector,
    title: 'entities/ArticleSortSelector',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onChangeOrder: fn(),
        onChangeSort: fn(),
        sort: ArticlesSortField.TITLE,
        order: 'asc'
    },
};
