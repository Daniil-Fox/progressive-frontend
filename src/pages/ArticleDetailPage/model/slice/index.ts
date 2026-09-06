import { WithSlice, combineSlices } from "@reduxjs/toolkit";

import { articleDetailsCommentsSlice } from "./articleDetailsCommentsSlice";
import { articleDetailsPageRecommendationsSlice } from "./articleDetailsPageRecommendationsSlice";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";

const articleDetailsReducer = combineSlices(
    articleDetailsCommentsSlice,
    articleDetailsPageRecommendationsSlice,
);

export const articleDetailsSlice = {
    reducerPath: "articleDetailsPage" as const,
    reducer: articleDetailsReducer,
};

rootReducer.inject(articleDetailsSlice);

declare module "app/providers/StoreProvider/config/rootReducer" {
    interface LazyLoadedSlices
        extends WithSlice<typeof articleDetailsSlice> {}
}

export { getArticleComments } from "./articleDetailsCommentsSlice";
export { getArticleRecommendations } from "./articleDetailsPageRecommendationsSlice";
