import {createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState} from "react";

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({})

const getAsyncAnimationModules = async () => {
    return Promise.all([
        import('@use-gesture/react'),
        import('@react-spring/web')
    ])
}

export const useAnimationLibs = () => {
    const context = useContext(AnimationContext) as Required<AnimationContextPayload>
    if(!context){
        throw new Error('useAnimationLibs must be used within useAnimationLibs()')
    }
    return context
}

export const AnimationProvider = ({children}: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>(undefined)
    const GestureRef = useRef<GestureType>(undefined)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getAsyncAnimationModules().then( ([Gesture, Spring]) => {
            GestureRef.current = Gesture
            SpringRef.current = Spring
            setIsLoaded(true)
        })
    }, []);

    const value = useMemo(() => {
        return {
            isLoaded,
            Spring: SpringRef.current,
            Gesture: GestureRef.current
        }
    }, [isLoaded])

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    )
}