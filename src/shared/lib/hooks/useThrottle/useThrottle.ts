import {useCallback, useRef} from "react";

// eslint-disable-next-line
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false)
    // eslint-disable-next-line
    return useCallback((...args: any[]) => {
        if(throttleRef.current) return;

        callback(...args);
        throttleRef.current = true

        setTimeout(() => {
            throttleRef.current = false
        }, delay)
    }, [callback, delay])
}