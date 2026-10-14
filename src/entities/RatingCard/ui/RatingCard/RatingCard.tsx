import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./RatingCard.module.scss";
import {Card} from "@/shared/ui/Card/Card";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Button, Input, Modal, Text} from "@/shared/ui";
import {StarRating} from "@/shared/ui/StarRating/StarRating";
import {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import {ButtonTheme} from "@/shared/ui/Button/Button";
import {BrowserView, MobileView} from "react-device-detect";
import {Drawer} from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
    } = props;
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if(hasFeedback){
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount)
    }, [feedback, onAccept, starsCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [starsCount])

    const modalContent = (
        <VStack gap={'32'}>
            <Text text={feedbackTitle}/>
            <Input placeholder={t('Ваш отзыв')}/>
            <HStack gap={'16'} justify={'end'}>
                <Button theme={ButtonTheme.OUTLINE_RED} onClick={cancelHandle}>Закрыть</Button>
                <Button theme={ButtonTheme.OUTLINE} onClick={acceptHandler}>Отправить</Button>
            </HStack>
        </VStack>
    )

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align={'center'} gap={'8'}>
                {title && <Text title={title}/>}
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>

            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                    {modalContent}
                </Drawer>
            </MobileView>

            <BrowserView>
                <Modal isOpen={isModalOpen}>
                    {modalContent}
                </Modal>
            </BrowserView>
        </Card>
    );
};
