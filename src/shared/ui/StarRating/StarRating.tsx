import {classNames} from "./../../lib/classNames/classNames";
import cls from "./StarRating.module.scss";
import {Icon} from "@/shared/ui/Icon/Icon";
import Star from './../../assets/star.svg'
import {useState} from "react";
interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = (props: StarRatingProps) => {
    const {className, onSelect, size = 30, selectedStars = 0} = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if(!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave = () => {
        if(!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        onSelect?.(starsCount)
        setCurrentStarsCount(starsCount)
        setIsSelected(true)
    }

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(cls.starIcon, {[cls.hovered]: currentStarsCount >= starNumber}, [])}
                    Svg={Star}
                    width={size}
                    height={size}
                    key={starNumber}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
