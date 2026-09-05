import {EntityState} from "@reduxjs/toolkit";
import {Article, ArticlesSortField, ArticleView} from "entities/Article";
import {SortOrder} from "shared/types/SortOrder";
import {ArticleType} from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;


    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    // filters
    view: ArticleView;
    order: SortOrder,
    sort: ArticlesSortField
    search: string;
    type: ArticleType

    _inited: boolean;
}