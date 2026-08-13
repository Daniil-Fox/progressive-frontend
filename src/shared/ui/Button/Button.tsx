import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import {ButtonHTMLAttributes, FC, memo} from "react";

export enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
    OUTLINE_RED = 'outline_red'
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = memo(({
                                className,
                                onClick,
                                children,
                                theme = ButtonTheme.BACKGROUND_INVERTED,
                                square = false,
                                size = ButtonSize.M,
                                disabled = false,
                                ...otherProps
                            }: ButtonProps) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }
    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
