import {FC, lazy} from "react";
import {ArticlesPageProps} from "./ArticlesPage";


export const ArticlesPageAsync = lazy<FC<ArticlesPageProps>>(() =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(import('./ArticlesPage'))
        }, 1000)
    })
)