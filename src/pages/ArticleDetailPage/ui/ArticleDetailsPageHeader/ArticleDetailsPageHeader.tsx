import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPageHeader.module.scss";
import {useNavigate} from "react-router-dom";
import {Button} from "shared/ui";
import {ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "shared/lib/store/hooks/hooks";
import {getCanEditArticle} from "./../../model/selectors/article";
import {pathRoutes} from "shared/routes/routes";
import {getData} from "entities/Article";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = ({className}: ArticleDetailsPageHeaderProps) => {
    const navigate = useNavigate()
    const {t} = useTranslation('article-details')
    const canEdit = useAppSelector(getCanEditArticle)
    const article = useAppSelector(getData)
    const onBackToList = () => {
        navigate(pathRoutes.articles)
    }
    const onEditArticle = () => {
        navigate(`${pathRoutes.article_details}${article?.id}/edit`);
    }
    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t("back to list")}
            </Button>
            {canEdit && (
                <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t("edit")}
                </Button>
            )}

        </div>
    );
};
