import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleListItem} from './ArticleListItem';


const meta = {
    component: ArticleListItem,
    title: 'enteties/ArticleListItem',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
