import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleViewSelector} from './ArticleViewSelector';
import {ArticleView} from "entities/Article";


const meta = {
    component: ArticleViewSelector,
    title: 'entities/ArticleViewSelector',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ViewSmall: Story = {
    args: {
        view: ArticleView.SMALL
    },
};

export const ViewBig: Story = {
    args: {
        view: ArticleView.BIG
    },
};
