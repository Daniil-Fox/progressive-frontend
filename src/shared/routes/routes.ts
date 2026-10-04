import {RouteProps} from "react-router-dom";
import {UserRole} from "entities/User/model/types/user";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    NOT_FOUND = "not-found",
    ARTICLES_PAGE = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
}

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[]
}
export const pathRoutes: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // + id
    [AppRoutes.ARTICLES_PAGE]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + id
    [AppRoutes.ARTICLE_CREATE]: "/articles/new", // + id
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit", // + id
    [AppRoutes.ADMIN_PANEL]: "/admin",
    [AppRoutes.FORBIDDEN]: "/forbidden",
    // last
    [AppRoutes.NOT_FOUND]: "*",
};