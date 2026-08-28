import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleViewSelector.module.scss";
import {ArticleView} from "./../../model/types/article";
import ListIcon from 'shared/assets/view-list.svg'
import GridIcon from 'shared/assets/grid.svg'
import {Button} from "shared/ui";
import {Icon} from "shared/ui/Icon/Icon";
import {ButtonTheme} from "shared/ui/Button/Button";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: GridIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
]

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const {className, view, onViewClick} = props;

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        }
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button key={viewType.view} theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)} className={classNames(cls.viewBtn, {[cls.notSelected]: viewType.view !== view}, [])}>
                    <Icon Svg={viewType.icon}/>
                </Button>
            ))}
        </div>
    );
};
