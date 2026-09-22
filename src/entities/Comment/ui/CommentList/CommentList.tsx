import {classNames} from "shared/lib/classNames/classNames";
import cls from "./CommentList.module.scss";
import {Text} from "shared/ui";
import {CommentCard} from "../CommentCard/CommentCard";
import {Comment} from "./../../model/types/comments";
import {VStack} from "shared/ui/Stack";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const {className, comments, isLoading} = props;

    if(isLoading){
        return (
            <VStack gap={'16'} className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={isLoading}/>
                <CommentCard isLoading={isLoading}/>
                <CommentCard isLoading={isLoading}/>
            </VStack>
        )
    }
    return (
        <VStack gap={'16'} className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
            ? comments.map(comment => (
                <CommentCard key={comment.id} className={cls.comment} comment={comment} isLoading={isLoading} />
                ))
            : <Text text={"Комментарии отсутствуют"}/>}
        </VStack>
    );
};
