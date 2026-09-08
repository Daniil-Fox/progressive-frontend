import {createSelector} from "@reduxjs/toolkit";
import {articleSelectors} from "entities/Article";
import {getUserAuthData} from "entities/User";

export const getCanEditArticle = createSelector(
    articleSelectors.getData,
    getUserAuthData,
    (article, user) => {
        if(!article || !user){
            return false;
        }

        return article.user.id === user.id
    }
)