import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {ArticleDetails} from './ArticleDetails';


const meta = {
    component: ArticleDetails,
    title: 'enteties/ArticleDetails',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
