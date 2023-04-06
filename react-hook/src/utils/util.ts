import React from "react";
/**
 * @description 递归查询对应的路由
 * @param {string} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export interface MetaProps {
    keepAlive?: boolean
    unWantedAuth?: boolean
    title: string
    key?: string
}

export interface RouteObject {
    children?: RouteObject[]
    element?: React.ReactNode
    path?: string
    meta?: MetaProps
}

export const matchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
    let result: RouteObject = {};
    for (let item of routes) {
        if (item.path === path) {
            return item
        }
        if (item.children && item.children.length) {
            const res = matchRoute(path, item.children)
            if (Object.keys(res).length) {
                result = res;
            }
        }
    }
    return result;
}