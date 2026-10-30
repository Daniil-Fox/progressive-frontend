import type {Meta, StoryObj} from '@storybook/react-webpack5';

import AboutPage from "./AboutPage";


const meta = {
    component: AboutPage,
    title: 'pages/AboutPage',
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof AboutPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {
    args: {

    }
}
