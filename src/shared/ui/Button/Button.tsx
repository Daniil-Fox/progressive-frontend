import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";
console.log(cls)
export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
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
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
    className,
    onClick,
    children,
    theme = "",
    square = false,
    size = ButtonSize.M,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square
    }
    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
