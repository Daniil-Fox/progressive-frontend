import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {ArticleList} from './ArticleList';
import {ArticleView} from "@/entities/Article";
import {mockArticle, mockArticles} from "@/entities/Article/model/mocks/mockArticle";

const meta = {
    component: ArticleList,
    title: 'entities/ArticleList',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        articles: mockArticles,
        view: ArticleView.SMALL,
    },
};

export const Big: Story = {
    args: {
        articles: [mockArticle, {...mockArticle, id: '2'}],
        view: ArticleView.BIG,
    },
};

export const LoadingSmall: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.SMALL,
    },
};

export const LoadingBig: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.BIG,
    },
};

export const Empty: Story = {
    args: {
        articles: [],
        isLoading: false,
    },
};
