import {Suspense} from "react";
import {Loader} from "shared/ui";
import {Decorator} from "@storybook/react-webpack5";

export const SuspenseDecorator: Decorator = (Story) => {
    return (
        <Suspense fallback={<Loader/>}>
            <Story/>
        </Suspense>
    )
}