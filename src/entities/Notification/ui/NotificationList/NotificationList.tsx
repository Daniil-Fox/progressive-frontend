import {classNames} from "shared/lib/classNames/classNames";
import cls from "./NotificationList.module.scss";
import {useNotifications} from "./../../api/notificationApi";
import {NotificationItem} from "./../NotificationItem/NotificationItem";
import {VStack} from "shared/ui/Stack";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface NotificationListProps {
    className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
    const {className} = props;
    const {data, isLoading} = useNotifications(null, {
        // pollingInterval: 5000
    })

    if(isLoading) {
        return (
            <VStack className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton height={80}/>
                <Skeleton height={80}/>
                <Skeleton height={80}/>
            </VStack>
        )
    }

    return (
        <VStack className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((notification) => <NotificationItem key={notification.id} notification={notification}/>)}
        </VStack>
    );
};
