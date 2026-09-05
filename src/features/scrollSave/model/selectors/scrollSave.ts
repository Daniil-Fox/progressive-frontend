import {RootState} from "app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";

export const getScroll = (state: RootState) => state?.scrollSave?.scroll

export const getScrollByPath = createSelector(
    [getScroll, (state: RootState, path: string) => path],
    (scroll, path) => scroll?.[path] || 0
)