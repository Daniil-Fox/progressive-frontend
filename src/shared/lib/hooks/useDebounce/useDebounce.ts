import {RefObject, useCallback, useRef} from "react";
// eslint-disable-next-line
export function useDebounce(callback: (...args: any[]) => void, delay: number){
    const timer = useRef(null) as RefObject<ReturnType<typeof setTimeout> | null>
// eslint-disable-next-line
    return useCallback((...args: any[]) => {
        if(timer.current) clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])
}