import { Navigate, useLocation } from "react-router-dom"
import { matchRoute } from "../utils/util"
import { router_item } from "../router"
function AuthRouter(props: { children: JSX.Element }) {
    const token = localStorage.getItem("token")
    const { pathname } = useLocation()
    const router = matchRoute(pathname, router_item)
    if (router.meta?.unWantedAuth) {
        return props.children
    }
    if (!token) {
        return <Navigate to="/login" />
    } else {
        //token存在
        return props.children
    }

}

export default AuthRouter