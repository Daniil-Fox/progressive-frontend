import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./AddCommentForm.module.scss";
import {Button, Input} from "@/shared/ui";
import {useAppDispatch, useAppSelector} from "@/shared/lib/store/hooks/hooks";
import {addCommentFormActions, addCommentFormSelectors} from "./../../model/slice/addCommentFormSlice";
import {useCallback} from "react";
import {useTranslation} from "react-i18next";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void
}

const AddCommentForm = ({className, onSendComment}: AddCommentFormProps) => {
    const text = useAppSelector(addCommentFormSelectors.getText)
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const handleInputChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        handleInputChange('')
    }, [text, onSendComment, handleInputChange])

    return (
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
            <Input value={text} onChange={handleInputChange} placeholder={t("Add a new comment...")} />
            <Button onClick={onSendHandler}>
                {t("Send")}
            </Button>
        </div>
    );
};

export default AddCommentForm;