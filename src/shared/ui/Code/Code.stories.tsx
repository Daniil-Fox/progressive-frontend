import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Code} from './Code';


const meta = {
    component: Code,
    title: 'shared/Code',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        text: "import type {Meta, StoryObj} from '@storybook/react-webpack5';\n" +
            "\n" +
            "import {fn} from 'storybook/test';\n" +
            "import {Code} from './Code';\n" +
            "\n" +
            "\n" +
            "const meta = {\n" +
            "    component: Code,\n" +
            "    title: 'enteties/Code',\n" +
            "    tags: ['autodocs'],\n" +
            "    args: {},\n" +
            "} satisfies Meta<typeof Code>;"
    },
};
