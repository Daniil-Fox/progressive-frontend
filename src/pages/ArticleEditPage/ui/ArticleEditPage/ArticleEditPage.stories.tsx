import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleEditPage} from './ArticleEditPage';


const meta = {
    component: ArticleEditPage,
    title: 'enteties/ArticleEditPage',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
