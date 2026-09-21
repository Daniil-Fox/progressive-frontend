import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Page.module.scss";
import {ReactNode, Ref, UIEvent, useEffect, useRef} from "react";
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {getScrollByPath, scrollSaveActions} from "features/scrollSave";
import {useLocation} from "react-router-dom";
import {useThrottle} from "shared/lib/hooks/useThrottle/useThrottle";

export const PAGE_ID = 'page'

interface PageProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
    ref?: Ref<HTMLElement | null>
    restoreScroll?: boolean
}

export const Page = (props: PageProps) => {
    const {className, children, onScrollEnd, ref, restoreScroll = true} = props;
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

    useEffect(() => {
        if (!restoreScroll || !wrapperRef.current) {
            return
        }

        wrapperRef.current.scrollTop = scrollPosition
        // восстанавливаем скролл только при смене маршрута
    }, [location.pathname, restoreScroll])

    return (
        <section
            ref={(node) => {
                wrapperRef.current = node
                if (typeof ref === 'function') {
                    ref(node)
                } else if (ref) {
                    ref.current = node
                }
            }}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </section>
    );
};
