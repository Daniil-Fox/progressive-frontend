import {classNames} from "shared/lib/classNames/classNames";
import cls from "./NotificationItem.module.scss";
import {Notification} from "./../../types/notification";
import {Card} from "shared/ui/Card/Card";
import {Text} from "shared/ui";

interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
    const {className, notification} = props
    const content = (
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={notification.title} text={notification.description}/>
        </Card>
    );

    if(notification.href){
        return (
            <a target={"_blank"} href={notification.href} className={classNames(cls.NotificationItem, {}, [className])}>
                {content}
            </a>
        )
    }

    return (
        content
    );
};
