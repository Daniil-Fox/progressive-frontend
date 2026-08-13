import {FC, lazy} from "react";
import {ArticlesDetailPageProps} from "./ArticlesDetailPage";

export const ArticleDetailPageAsync = lazy<FC<ArticlesDetailPageProps>>(() =>
    new Promise(resolve => setTimeout( () => resolve(import('./ArticlesDetailPage')), 1000 ))
)