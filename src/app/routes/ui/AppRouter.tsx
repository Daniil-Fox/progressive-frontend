import {Suspense, useCallback, useMemo} from "react";
import { Route, Routes } from "react-router-dom";
import {AppRoutes, AppRoutesProps, routeConfig} from "../config/routes";
import {PageLoader} from "widgets/PageLoader";
import {useAppSelector} from "shared/lib/store/hooks/hooks";
import {getUserAuthData} from "entities/User";
import {RequireAuth} from "app/routes/ui/RequireAuth";

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
       const element = (
           <Suspense fallback={ <PageLoader/> }>
               <div className="page-wrapper">
                   {route.element}
               </div>
           </Suspense>
       )

        return (
            <Route key={route.path} path={route.path} element={
                route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
            }/>
        )
    }, [])
    return (
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
    );
}



export default AppRouter;
