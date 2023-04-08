import { AnyAction } from "redux"
//定义数据
const initState = {
    list: '',
    detailed: ''
}

const info = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case "ADD_COUNT":
            return state
        case "UPDATE_NAME":
            return state
        default:
            return state
    }
}

export default info;