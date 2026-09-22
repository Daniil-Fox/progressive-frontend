import {classNames} from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import {Comment} from "./../../model/types/comments";
import {AppLink, Avatar, Text} from "shared/ui";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {pathRoutes, routeConfig} from "app/routes/config/routes";
import {HStack, VStack} from "shared/ui/Stack";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const {className, comment, isLoading} = props;



    if(isLoading){
        return (
            <VStack gap={'8'} className={classNames(cls.CommentCard, {}, [className])}>
                <HStack gap={'16'}>
                    <Skeleton width={30} height={30} border={'50%'}/>
                    <Skeleton width={200} height={30}/>
                </HStack>
                <Skeleton width={400} height={60}/>
            </VStack>
        )
    }

    if(!comment){
        return null
    }

    return (
        <VStack gap={'8'} className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${pathRoutes.profile}${comment.user.id}`}>
                <HStack gap={'16'}>
                    {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
                    <Text title={comment.user.username}/>
                </HStack>
            </AppLink>
            <Text text={comment.text}/>
        </VStack>
    );
};
