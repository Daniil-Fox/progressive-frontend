import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Flex} from './Flex';


const meta = {
    component: Flex,
    title: 'shared/Flex',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        )
    },
};
export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        )
    },
};
export const RowGap4: Story = {
    args: {
        direction: 'row',
        gap: '4',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        )
    },
};
export const RowGap8: Story = {
    args: {
        direction: 'row',
        gap: '8',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        )
    },
};
export const RowGap16: Story = {
    args: {
        direction: 'row',
        gap: '16',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        )
    },
};
export const RowGap32: Story = {
    args: {
        direction: 'row',
        gap: '32',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        )
    },
};
export const RowGap64: Story = {
    args: {
        direction: 'row',
        gap: '64',
        children: (
            <>
                <div>text</div>
                <div>text</div>
                <div>text</div>
                <div>text</div>
            </>
        )
    },
};
