import type {Preview} from '@storybook/react-webpack5'
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/shared/lib/theme/ThemeContext";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import {StoreDecorator} from "../../src/shared/config/storybook/StoreDecorator/StoreDecorator";


const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator,
        StoreDecorator({}),
        RouterDecorator,
    ],
    globalTypes: {
        theme: {
            description: 'Global theme',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                items: [Theme.LIGHT, Theme.DARK]
            }
        }
    },
    initialGlobals: {
        theme: Theme.LIGHT
    },
};

export default preview;