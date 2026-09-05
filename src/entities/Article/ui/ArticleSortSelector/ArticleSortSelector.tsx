import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleSortSelector.module.scss";
import {Select, SelectOption} from "shared/ui/Select/Select";
import {useMemo} from "react";
import {ArticlesSortField} from "entities/Article";
import {SortOrder} from "shared/types/SortOrder";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticlesSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticlesSortField) => void;
}


export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {className, sort, order, onChangeOrder, onChangeSort} = props

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: 'возрастанию'
        },
        {
            value: 'desc',
            content: 'убыванию'
        }
    ], [])

    const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(() => [
        {
            value: ArticlesSortField.CREATED,
            content: 'дате создания'
        },
        {
            value: ArticlesSortField.TITLE,
            content: 'заголовку'
        },
        {
            value: ArticlesSortField.VIEWS,
            content: 'просмотрам'
        },
    ], [])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                value={sort}
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={"Сортировать по"}
            />

            <Select
                value={order}
                onChange={onChangeOrder}
                options={orderOptions}
                label={"по"}
            />
        </div>
    );
};
