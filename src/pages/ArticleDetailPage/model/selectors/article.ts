import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "entities/User";
import {getData} from "entities/Article";

export const getCanEditArticle = createSelector(
    getData,
    getUserAuthData,
    (article, user) => {
        if(!article || !user){
            return false;
        }

        return article.user.id === user.id
    }
)