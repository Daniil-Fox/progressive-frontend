import {classNames} from "shared/lib/classNames/classNames";
import {FC, memo, useMemo, useState} from "react";
import cls from "./Sidebar.module.scss";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";
import {useAppSelector} from "shared/lib/store/hooks/hooks";
import {getSidebarItems} from "widgets/Sidebar/model/selectors/getSidebarItems";

interface SidebarProps {
    className?: string;
}
export const Sidebar: FC = memo(({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const SidebarItemList = useAppSelector(getSidebarItems)
    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    const itemsList = useMemo(() => SidebarItemList.map(item =>
        <SidebarItem
            item={item}
            collapsed={isCollapsed}
            key={item.path}/>
    ), [isCollapsed])

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
                className,
            ])}
        >
            <menu className={cls.links}>
                {itemsList}
            </menu>
            <Button square={true} size={ButtonSize.XL} className={cls.collapseBtn} theme={ButtonTheme.BACKGROUND_INVERTED} data-testid="toggle-sidebar-btn" onClick={toggleCollapsed}>{isCollapsed ? ">" : "<"}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={isCollapsed}/>
            </div>
        </aside>
    );
});
