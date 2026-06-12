import { classNames } from "shared/lib/helpers/classNames/classNames";
import { FC, useState } from "react";
import cls from "./Sidebar.module.scss";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";

interface SidebarProps {
  className?: string;
}
export const Sidebar: FC = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [
                className,
            ])}
        >
            <Button data-testid="toggle-sidebar-btn" onClick={toggleCollapsed}>Toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};
