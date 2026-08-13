import "./style/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/lib/theme/useTheme";
import { AppRouter } from "./routes";
import {Suspense, useEffect} from "react";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {getUserInited, userActions} from "entities/User";
import {PageLoader} from "widgets/PageLoader";

const App = () => {
    const dispatch = useAppDispatch()
    const inited = useAppSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    const className = classNames("app", {}, []);
    return (
        <div className={className}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar />
                <div className="page">
                    <Sidebar />
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
