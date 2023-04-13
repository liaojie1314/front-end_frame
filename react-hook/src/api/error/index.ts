import { http } from "../../utils/request";
import { ErrorParams, ErrorRes } from "./types";

//登录
export function error(data: ErrorParams) {
    return http.post<ErrorRes>('/error', data)
}