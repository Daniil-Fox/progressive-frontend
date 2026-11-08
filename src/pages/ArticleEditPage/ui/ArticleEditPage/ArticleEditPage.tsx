import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./ArticleEditPage.module.scss";
import {Page} from "@/widgets/Page";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

export interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const {className} = props;
    const {id} = useParams<{id: string}>();
    const isEdit = Boolean(id);
    const {t} = useTranslation();

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('Article Edit Page') : t('Article Create page')}
        </Page>
    );
};

export default ArticleEditPage