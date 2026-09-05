import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import {ReactNode, RefObject, UIEvent, useRef} from "react";
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {getScrollByPath, scrollSaveActions} from "features/scrollSave";
import {useLocation} from "react-router-dom";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useThrottle} from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {className, children, onScrollEnd} = props;
    const wrapperRef = useRef<HTMLElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch()
    const location = useLocation()
    const scrollPosition = useAppSelector((state) => getScrollByPath(state, location.pathname))

    useInfiniteScroll({callback: onScrollEnd, wrapperRef, triggerRef})

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: location.pathname,
            position: e.currentTarget.scrollTop
        }))
    }, 500)

    useInitialEffect(() => {
        if(wrapperRef && wrapperRef.current){
            wrapperRef.current.scrollTop = scrollPosition
        }
    })

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </section>
    );
};
