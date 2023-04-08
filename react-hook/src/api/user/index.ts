import { http } from "../../utils/request";
import { LoginParams, LoginRes } from "./types";

//登录
export function login(data: LoginParams) {
    return http.post<LoginRes>('/login', data)
}