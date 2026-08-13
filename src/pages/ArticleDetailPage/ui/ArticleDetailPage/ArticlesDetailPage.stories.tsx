import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import ArticlesDetailPage from './ArticlesDetailPage';


const meta = {
    component: ArticlesDetailPage,
    title: 'enteties/ArticlesDetailPage',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticlesDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
