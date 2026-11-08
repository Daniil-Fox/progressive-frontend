import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {http, HttpResponse} from 'msw';
import {ArticleRating} from './ArticleRating';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    component: ArticleRating,
    title: 'features/ArticleRating',
    tags: ['autodocs'],
    args: {
        articleId: '1',
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {id: '1', username: 'admin'},
                _inited: true,
            },
        }),
    ],
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rated: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('/article-ratings', () => {
                    return HttpResponse.json([{rate: 4, feedback: 'Отличная статья'}]);
                }),
            ],
        },
    },
};

export const Unrated: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get('/article-ratings', () => {
                    return HttpResponse.json([]);
                }),
                http.post('/article-ratings', () => {
                    return new HttpResponse(null, {status: 201});
                }),
            ],
        },
    },
};
