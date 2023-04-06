import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import lazyLoad from './lazyLoad'
import Layout from '../views/layout'

export const router_item: Array<Object> = [
    {
        path: '/',
        label: '首页',
        key: '',
        hidden: true,
        element: <Navigate to="/login" />
    },
    {
        path: '/login',
        label: '登录',
        key: 'login',
        // element: <Login />,
        element: lazyLoad(React.lazy(()=>import("../views/login"))),
        meta: {
            //不需要权限
            unWantedAuth: true,
            title: "登录页",
            key: "login"
        }
    },
    {
        path: '/resetPas',
        label: '重置密码',
        key: 'resetPas',
        element: lazyLoad(React.lazy(()=>import("../views/login"))),
        meta: {
            //不需要权限
            unWantedAuth: true,
            title: "重置密码",
            key: "resetPas"
        }
    },
    {
        path: '/layout',
        label: '控制台',
        key: 'layout',
        element: <Layout />,
        children: [
            {
                path: 'home', key: 'home', label: '首页', element: lazyLoad(React.lazy(()=>import("../views/home"))),
                children: [
                    { path: 'home1', key: 'home1', label: '首页1', element: lazyLoad(React.lazy(()=>import("../views/home"))) },
                    { path: 'user1', key: 'user1', label: '用户1', element: lazyLoad(React.lazy(()=>import("../views/user"))) },
                ]
            },
            { path: 'user', key: 'user', label: '用户', element: lazyLoad(React.lazy(()=>import("../views/user"))) },
        ]
    },
    {
        path: '/404',
        label: '404',
        key: 'error',
        element: lazyLoad(React.lazy(()=>import("../views/error/404"))),
        meta: {
            //不需要权限
            unWantedAuth: true,
            title: "404",
            key: "error"
        }
    },
    {
        path: '*',
        element: <Navigate to="/404" />,
    },
]

const GetRouters = () => {
    const routes = useRoutes(router_item)
    return routes
}

export default GetRouters;