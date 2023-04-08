import { AnyAction } from "redux"
import { SET_TOKEN, SET_USERNAME } from "../type"
import { getCookie } from "@/utils/cookies"
//定义数据
const initState = {
    token: getCookie('token') || null,
    username: ''
}

const global = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.token }
        case SET_USERNAME:
            return { ...state, username: action.username }
        default:
            return state
    }
}

export default global;