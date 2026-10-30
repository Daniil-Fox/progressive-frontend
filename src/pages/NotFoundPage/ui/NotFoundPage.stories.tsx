import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {NotFoundPage} from "./NotFoundPage";


const meta = {
    component: NotFoundPage,
    title: 'pages/NotFoundPage',
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof NotFoundPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {
    args: {

    }
}
