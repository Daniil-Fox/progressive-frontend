import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';


const meta = {
    component: ArticleDetailsPageHeader,
    title: 'enteties/ArticleDetailsPageHeader',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
