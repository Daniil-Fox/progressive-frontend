import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleDetailComments} from './ArticleDetailComments';


const meta = {
    component: ArticleDetailComments,
    title: 'enteties/ArticleDetailComments',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleDetailComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
