import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";
import {ArticlesPage} from "pages/ArticlesPage";
import ArticlesDetailPage from "pages/ArticleDetailPage/ui/ArticleDetailPage/ArticlesDetailPage";
import ArticleEditPage from "pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    NOT_FOUND = "not-found",
    ARTICLES_PAGE = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit'
}

export const pathRoutes: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // + id
    [AppRoutes.ARTICLES_PAGE]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + id
    [AppRoutes.ARTICLE_CREATE]: "/articles/new", // + id
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit", // + id
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
    [AppRoutes.NOT_FOUND]: {
        path: pathRoutes["not-found"],
        element: <NotFoundPage/>
    }
};
