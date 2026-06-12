import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
    className,
    onClick,
    children,
    theme = "",
    ...otherProps
}) => {
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
