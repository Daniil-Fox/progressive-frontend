import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import {ReactNode, RefObject, useRef} from "react";
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {className, children, onScrollEnd} = props;
    const wrapperRef = useRef<HTMLElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);

    useInfiniteScroll({callback: onScrollEnd, wrapperRef, triggerRef})

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef}/>
        </section>
    );
};
