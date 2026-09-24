import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleList} from './ArticleList';
import {ArticleType} from "entities/Article";


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
        articles: [
            {
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
            }
        ]
    },
};
