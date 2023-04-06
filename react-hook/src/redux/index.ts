import { legacy_createStore as createStore } from 'redux'

//定义数据
const initState = {
    count: 0,
    name: 'a'
}

//关联action
function countReducer(state = initState, action: any) {
    switch (action.type) {
        case "ADD_COUNT":
            return { ...state, count: state.count + action.number }
        case "UPDATE_NAME":
            return { ...state, name: action.name }
        default:
            return state
    }
}

const store = createStore(countReducer)

export default store;