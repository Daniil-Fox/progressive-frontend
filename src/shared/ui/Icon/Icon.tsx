import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import * as React from "react";

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.ComponentProps<"svg"> & { title?: string }>;
    inverted?: boolean;
}

export const Icon = ({className, Svg, inverted}: IconProps) => {
    return (
        <Svg className={classNames(cls.Icon, {[cls.inverted]: inverted}, [className])}/>
    );
};
