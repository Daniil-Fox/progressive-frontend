import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./ArticleSortSelector.module.scss";
import {Select, SelectOption} from "@/shared/ui/Select/Select";
import {useMemo} from "react";
import {ArticlesSortField} from "./../../model/types/article";
import {SortOrder} from "@/shared/types/SortOrder";
import {useTranslation} from "react-i18next";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticlesSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticlesSortField) => void;
}


export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {className, sort, order, onChangeOrder, onChangeSort} = props
    const {t} = useTranslation()

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending')
        },
        {
            value: 'desc',
            content: t('descending')
        }
    ], [t])

    const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(() => [
        {
            value: ArticlesSortField.CREATED,
            content: t('by date')
        },
        {
            value: ArticlesSortField.TITLE,
            content: t('by title')
        },
        {
            value: ArticlesSortField.VIEWS,
            content: t('by views')
        },
    ], [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={t("Sort by")}
            />

            <Select
                value={order}
                onChange={onChangeOrder}
                options={orderOptions}
                label={t("by")}
            />
        </div>
    );
};
