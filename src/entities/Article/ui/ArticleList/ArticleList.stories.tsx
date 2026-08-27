import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleList} from './ArticleList';


const meta = {
    component: ArticleList,
    title: 'enteties/ArticleList',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        articles: []
    },
};
