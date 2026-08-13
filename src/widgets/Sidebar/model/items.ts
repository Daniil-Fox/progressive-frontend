import React, {FunctionComponent, SVGProps} from "react";
import {pathRoutes} from "app/routes/config/routes";
import HomeIcon from 'shared/assets/home.svg'
import AboutIcon from 'shared/assets/list.svg'
import Profile from 'shared/assets/profile.svg'
import Article from 'shared/assets/Article.svg'
export interface SidebarItemType {
    path: string;
    text: string;
    Icon:  FunctionComponent<SVGProps<SVGSVGElement> & {
        title?: string;
    }>

    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: pathRoutes.main,
        text: "main",
        Icon: HomeIcon
    },
    {
        path: pathRoutes.about,
        text: "about",
        Icon: AboutIcon
    },
    {
        path: pathRoutes.profile,
        text: "profile",
        Icon: Profile,
        authOnly: true
    },
    {
        path: pathRoutes.articles,
        text: "articles",
        Icon: Article,
        authOnly: true
    },
]