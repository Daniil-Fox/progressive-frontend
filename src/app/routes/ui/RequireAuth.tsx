import {ReactNode} from "react";
import {getUserAuthData} from "entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {pathRoutes} from "app/routes/config/routes";
import {useAppSelector} from "shared/lib/store/hooks/hooks";

export function RequireAuth({children}: {children: ReactNode}) {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation()

    if(!auth){
        return <Navigate to={pathRoutes.main} state={{from: location}} replace/>
    }

    return children;
}