import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {ArticleListItem} from './ArticleListItem';
import {ArticleView} from "@/entities/Article";
import {mockArticle} from "@/entities/Article/model/mocks/mockArticle";

const meta = {
    component: ArticleListItem,
    title: 'entities/ArticleListItem',
    tags: ['autodocs'],
    args: {
        article: mockArticle,
    },
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Big: Story = {
    args: {
        view: ArticleView.BIG,
    },
};

export const Small: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};
