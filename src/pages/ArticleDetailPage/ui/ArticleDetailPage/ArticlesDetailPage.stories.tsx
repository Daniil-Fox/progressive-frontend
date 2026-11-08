import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {http, HttpResponse} from 'msw';
import ArticlesDetailPage from './ArticlesDetailPage';
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {mockArticle, mockArticles} from "@/entities/Article/model/mocks/mockArticle";
import {PartialStoryFn} from "storybook/internal/csf";

const ArticleIdDecorator = (Story: PartialStoryFn) => (
    <MemoryRouter initialEntries={['/articles/1']}>
        <Routes>
            <Route path="/articles/:id" element={<Story />} />
        </Routes>
    </MemoryRouter>
);

const meta = {
    component: ArticlesDetailPage,
    title: 'pages/ArticlesDetailPage',
    tags: ['autodocs'],
    args: {},
    decorators: [
        ArticleIdDecorator,
        StoreDecorator({
            user: {
                authData: {id: '1', username: 'admin'},
                _inited: true,
            },
            articleDetails: {
                isLoading: false,
                data: mockArticle,
            },
            articleDetailsPage: {
                comments: {
                    isLoading: false,
                    ids: ['1', '2'],
                    entities: {
                        '1': {
                            id: '1',
                            text: 'Отличный разбор',
                            user: {id: '1', username: 'admin'},
                        },
                        '2': {
                            id: '2',
                            text: 'Спасибо за статью',
                            user: {id: '2', username: 'user'},
                        },
                    },
                },
            },
        }),
    ],
    parameters: {
        msw: {
            handlers: [
                http.get('/articles', () => {
                    return HttpResponse.json(mockArticles);
                }),
                http.get('/article-ratings', () => {
                    return HttpResponse.json([{rate: 4, feedback: 'Отличная статья'}]);
                }),
            ],
        },
    },
} satisfies Meta<typeof ArticlesDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
