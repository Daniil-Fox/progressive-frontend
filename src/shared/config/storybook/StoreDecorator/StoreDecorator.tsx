import 'app/style/index.scss'
import {PartialStoryFn} from "storybook/internal/csf";
import {StoreProvider} from "app/providers/StoreProvider";
import {RootState} from "app/providers/StoreProvider/config/store";


export const StoreDecorator = (state: Partial<RootState>) => (Story: PartialStoryFn) => {
    return <StoreProvider initialStore={state}>
        <Story />
    </StoreProvider>;
};