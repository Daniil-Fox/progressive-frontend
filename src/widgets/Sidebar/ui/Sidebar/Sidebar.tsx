import {classNames} from "shared/lib/classNames/classNames";
import {FC, memo, useMemo, useState} from "react";
import cls from "./Sidebar.module.scss";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {SidebarItemList} from "widgets/Sidebar/model/items";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

interface SidebarProps {
    className?: string;
}
export const Sidebar: FC = memo(({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
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
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
                className,
            ])}
        >
            <div className={cls.links}>
                {itemsList}
            </div>
            <Button square={true} size={ButtonSize.XL} className={cls.collapseBtn} theme={ButtonTheme.BACKGROUND_INVERTED} data-testid="toggle-sidebar-btn" onClick={toggleCollapsed}>{isCollapsed ? ">" : "<"}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={isCollapsed}/>
            </div>
        </div>
    );
});
