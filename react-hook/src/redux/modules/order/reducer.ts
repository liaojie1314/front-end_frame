import { AnyAction } from "redux"
//定义数据
const initState = {
    list: '',
    count: 0
}

const order = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case "ADD_COUNT":
            return state
        case "UPDATE_NAME":
            return state
        default:
            return state
    }
}

export default order;