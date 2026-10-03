import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";
import {ArticlesPage} from "pages/ArticlesPage";
import ArticlesDetailPage from "pages/ArticleDetailPage/ui/ArticleDetailPage/ArticlesDetailPage";
import ArticleEditPage from "pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage";
import {UserRole} from "entities/User/model/types/user";
import {AdminPanel} from "pages/AdminPanel";
import {ForbiddenPage} from "pages/ForbiddenPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[]
}

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

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: pathRoutes.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: pathRoutes.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: pathRoutes.profile + ":id",
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.ARTICLES_PAGE]: {
        path: pathRoutes.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: pathRoutes.article_details + ":id",
        element: <ArticlesDetailPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: pathRoutes.article_edit,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: pathRoutes.article_create,
        element: <ArticleEditPage/>,
        authOnly: true
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: pathRoutes.admin_panel,
        element: <AdminPanel/>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER]
    },
    [AppRoutes.FORBIDDEN]: {
        path: pathRoutes.forbidden,
        element: <ForbiddenPage/>,
    },
    [AppRoutes.NOT_FOUND]: {
        path: pathRoutes["not-found"],
        element: <NotFoundPage/>
    }
};
