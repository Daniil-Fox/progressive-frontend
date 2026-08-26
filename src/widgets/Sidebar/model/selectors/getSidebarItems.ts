import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "entities/User";
import {pathRoutes} from "app/routes/config/routes";

import {SidebarItemType} from "./../types/sidebarSchema";
import HomeIcon from 'shared/assets/home.svg'
import AboutIcon from 'shared/assets/list.svg'
import ProfileIcon from 'shared/assets/profile.svg'
import ArticleIcon from 'shared/assets/Article.svg'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemList: SidebarItemType[] = [
            {
                path: pathRoutes.main,
                text: "main",
                Icon: HomeIcon
            },
            {
                path: pathRoutes.about,
                text: "about",
                Icon: AboutIcon
            }
        ]

        if(userData) {
            SidebarItemList.push(
                {
                    path: pathRoutes.profile + userData.id,
                    text: "profile",
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: pathRoutes.articles,
                    text: "articles",
                    Icon: ArticleIcon,
                    authOnly: true
                }
            )
        }

        return SidebarItemList

    }
)