import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import * as React from "react";

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.ComponentProps<"svg"> & { title?: string }>
}

export const Icon = ({className, Svg}: IconProps) => {
    return (
        <Svg className={classNames(cls.Icon, {}, [className])}/>
    );
};
