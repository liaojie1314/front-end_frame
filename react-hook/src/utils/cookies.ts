import Cookies from "js-cookie"

/**
 * 设置cookie
 * @param name 
 * @param value 
 */
export const setCookie = (name: string, value: string) => {
    Cookies.set(name, value)
}

/**
 * 获取cookie
 * @param name
 * @returns value
 */
export const getCookie = (name: string) => {
    return Cookies.get(name)
}

/**
 * 清除cookie
 * @param name 
 */

export const removeCookie = (name: string) => {
    Cookies.remove(name)
}