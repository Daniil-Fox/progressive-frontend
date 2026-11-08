import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {fn} from 'storybook/test';
import {StarRating} from './StarRating';

const meta = {
    component: StarRating,
    title: 'shared/StarRating',
    tags: ['autodocs'],
    args: {
        onSelect: fn(),
    },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Selected: Story = {
    args: {
        selectedStars: 3,
    },
};

export const Large: Story = {
    args: {
        size: 50,
        selectedStars: 5,
    },
};
