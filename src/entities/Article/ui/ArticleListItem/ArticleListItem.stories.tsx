import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleListItem} from './ArticleListItem';
import {ArticleType, ArticleView} from "entities/Article";


const meta = {
    component: ArticleListItem,
    title: 'enteties/ArticleListItem',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {
    args: {
        article: {
            createdAt: '23.05.2024',
            title: 'Заголовок статьи',
            type: [ArticleType.IT],
            img: '',
            id: '123',
            blocks: [],
            subtitle: 'Подзаголовок',
            user: {
                username: 'User',
                avatar: '',
                id: '1'
            },
            views: 123
        },
        view: ArticleView.BIG
    },
};
export const Small: Story = {
    args: {
        article: {
            createdAt: '23.05.2024',
            title: 'Заголовок статьи',
            type: [ArticleType.IT],
            img: '',
            id: '123',
            blocks: [],
            subtitle: 'Подзаголовок',
            user: {
                username: 'User',
                avatar: '',
                id: '1'
            },
            views: 123
        },
        view: ArticleView.SMALL
    },
};
