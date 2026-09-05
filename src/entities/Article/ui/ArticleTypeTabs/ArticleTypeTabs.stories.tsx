import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleTypeTabs} from './ArticleTypeTabs';


const meta = {
    component: ArticleTypeTabs,
    title: 'entities/ArticleTypeTabs',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
