import {RefObject, useEffect} from "react";

export interface UseInfiniteScrollProps {
    callback?: () => void;
    wrapperRef: RefObject<HTMLElement | null>;
    triggerRef: RefObject<HTMLElement | null>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps)=>  {
    const { callback, wrapperRef, triggerRef } = props;
    useEffect(() => {
        if (!callback) {
            return;
        }

        const trigger = triggerRef.current;
        const wrapper = wrapperRef.current;

        const options = {
            root: wrapper,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                callback();
            }
        }, options);

        if (trigger) {
            observer.observe(trigger);
        }

        return () => {
            if (trigger) {
                observer.unobserve(trigger);
            }
            observer.disconnect();
        };
    }, [callback, wrapperRef, triggerRef]);
}