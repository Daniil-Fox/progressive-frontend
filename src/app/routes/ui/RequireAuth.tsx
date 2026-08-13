import {ReactNode} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {pathRoutes} from "app/routes/config/routes";

export function RequireAuth({children}: {children: ReactNode}) {
    const auth = useSelector(getUserAuthData)
    const location = useLocation()

    if(!auth){
        return <Navigate to={pathRoutes.main} state={{from: location}} replace/>
    }

    return children;
}