import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesDetailPage.module.scss";

export interface ArticlesDetailPageProps {
    className?: string;
}

const ArticlesDetailPage = ({className}: ArticlesDetailPageProps) => {
    return (
        <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
            <h1>Articles Detail Page</h1>
        </div>
    );
};

export default ArticlesDetailPage;