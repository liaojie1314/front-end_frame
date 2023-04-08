import { Dispatch } from "redux";
import { SET_TOKEN, SET_USERNAME } from "../type"

//设置token
export const setToken = (value: string) => ({ type: SET_TOKEN, token: value })
//异步
// export const setToken = (value: string) => {
//     return (dispatch: Dispatch) => {
//         setTimeout(() => {
//             dispatch({
//                 type: SET_TOKEN, 
//                 token: value
//             })
//         }, 2000);
//     }
// }

//设置用户名
export const setUserName = (value: string) => ({ type: SET_USERNAME, username: value })