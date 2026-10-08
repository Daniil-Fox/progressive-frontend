import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Drawer.module.scss";
import {memo, ReactNode} from "react";
import {Portal} from "shared/ui";
import {Overlay} from "./../Overlay/Overlay";

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
    const {className, children, isOpen, onClose} = props;
    // const {theme} = useTheme()

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {[cls.opened]: isOpen}, [className, 'app_drawer'])}>
                <Overlay onClick={onClose}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
