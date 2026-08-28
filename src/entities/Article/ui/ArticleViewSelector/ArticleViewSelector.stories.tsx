import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleViewSelector} from './ArticleViewSelector';


const meta = {
    component: ArticleViewSelector,
    title: 'enteties/ArticleViewSelector',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
