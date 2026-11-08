import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {fn} from 'storybook/test';
import {RatingCard} from './RatingCard';

const meta = {
    component: RatingCard,
    title: 'entities/RatingCard',
    tags: ['autodocs'],
    args: {
        onAccept: fn(),
        onCancel: fn(),
    },
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        title: 'Оцените статью',
        feedbackTitle: 'Оставьте отзыв о статье',
        hasFeedback: true,
    },
};

export const Rated: Story = {
    args: {
        title: 'Оцените статью',
        rate: 4,
        hasFeedback: true,
        feedbackTitle: 'Оставьте отзыв о статье',
    },
};

export const WithoutFeedback: Story = {
    args: {
        title: 'Оцените статью',
        hasFeedback: false,
    },
};
