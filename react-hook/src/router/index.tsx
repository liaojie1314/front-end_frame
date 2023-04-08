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
        element: lazyLoad(React.lazy(() => import("../views/login"))),
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
        hidden: true,
        key: 'resetPas',
        element: lazyLoad(React.lazy(() => import("../views/login"))),
        meta: {
            //不需要权限
            unWantedAuth: true,
            title: "重置密码",
            key: "resetPas"
        }
    },
    {
        label: '控制台',
        element: <Layout />,
        children: [
            { path: 'home', key: 'home', label: '首页', element: lazyLoad(React.lazy(() => import("../views/home"))), },
        ]
    },
    {
        label: '信息管理',
        element: <Layout />,
        children: [
            { path: 'info', key: 'info', label: '信息列表', element: lazyLoad(React.lazy(() => import("../views/info"))), },
        ]
    },
    {
        label: '订单管理',
        element: <Layout />,
        children: [
            { path: 'order', key: 'order', label: '订单列表', element: lazyLoad(React.lazy(() => import("../views/order"))), },
        ]
    },
    {
        path: '/404',
        hidden: true,
        label: '404',
        key: 'error',
        element: lazyLoad(React.lazy(() => import("../views/error/404"))),
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