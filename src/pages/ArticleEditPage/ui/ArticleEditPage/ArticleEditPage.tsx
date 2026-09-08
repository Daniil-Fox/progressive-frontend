import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleEditPage.module.scss";
import {Page} from "widgets/Page";
import {useParams} from "react-router-dom";

export interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const {className} = props;
    const {id} = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? 'Article Edit Page' : 'Article Create page'}
        </Page>
    );
};

export default ArticleEditPage