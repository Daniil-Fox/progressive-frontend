import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Flex.module.scss";
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export type FlexJustify = 'start' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32' | '64'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
    around: cls.justifyAround,
    evenly: cls.justifyEvenly,
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
    stretch: cls.alignStretch
}

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
    64: cls.gap64,
}

type DivType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivType{
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'center',
        gap
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        directionClasses[direction],
        alignClasses[align],
        gap && gapClasses[gap]
    ]

    return (
        <div className={classNames(cls.Flex, {}, classes)}>
            {children}
        </div>
    );
};
