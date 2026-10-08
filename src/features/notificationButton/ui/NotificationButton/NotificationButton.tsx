import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import {Button, Text} from "shared/ui";
import {ButtonTheme} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";
import NotyIcon from 'shared/assets/noty.svg'
import {NotificationList} from "entities/Notification";
import {Popover} from "shared/ui/Popover/Popover";
import {useCallback, useState} from "react";
import {Drawer} from "shared/ui/Drawer/Drawer";
import {BrowserView, MobileView} from 'react-device-detect'
interface NotificationButtonProps {
    className?: string;
}


export const NotificationButton = ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotyIcon} inverted={true}/>
        </Button>
    )

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={
                        trigger
                    }>
                    <NotificationList className={cls.notifications}/>
                </Popover>
            </BrowserView>

            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList/>
                </Drawer>
            </MobileView>
        </>
    );
};
