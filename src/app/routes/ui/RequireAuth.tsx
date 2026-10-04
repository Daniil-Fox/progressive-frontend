import {ReactNode, useMemo} from "react";
import {getUserAuthData, getUserRoles} from "entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {useAppSelector} from "shared/lib/store/hooks/hooks";
import {UserRole} from "entities/User/model/types/user";
import {pathRoutes} from "shared/routes/routes";

interface RequireAuthProps {
    children: ReactNode;
    roles?: UserRole[]
}

export function RequireAuth({children, roles}: RequireAuthProps) {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation()
    const userRoles = useAppSelector(getUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if(!roles) return true

        return roles.some(requiredRole => userRoles?.includes(requiredRole))
    }, [])

    if(!auth){
        return <Navigate to={pathRoutes.main} state={{from: location}} replace/>
    }

    if(!hasRequiredRoles){
        return <Navigate to={pathRoutes.forbidden} state={{from: location}} replace/>
    }

    return children;
}