import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";
import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement>{
    className?: string;
    Svg: React.FunctionComponent<React.ComponentProps<"svg"> & { title?: string }>;
    inverted?: boolean;
}

export const Icon = (props: IconProps) => {
    const {className, Svg, inverted, ...otherProps} = props;
    return (
        <Svg className={classNames(cls.icon, {[cls.inverted]: inverted}, [className])} {...otherProps}/>
    );
};
