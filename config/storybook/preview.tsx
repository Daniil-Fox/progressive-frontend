import type {Preview} from '@storybook/react-webpack5'
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/shared/lib/theme/ThemeContext";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import {SuspenseDecorator} from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";
import {mswLoader} from "msw-storybook-addon/csf3";

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
        SuspenseDecorator,
        RouterDecorator,
    ],
    loaders: [mswLoader()],
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