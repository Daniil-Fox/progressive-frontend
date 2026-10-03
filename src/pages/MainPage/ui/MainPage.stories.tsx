import type {Meta, StoryObj} from '@storybook/react-webpack5';

import MainPage from "./MainPage";

const meta = {
    component: MainPage,
    title: 'pages/MainPage',
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof MainPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {
    args: {

    }
}