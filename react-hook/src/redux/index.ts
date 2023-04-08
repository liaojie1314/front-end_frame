import { legacy_createStore as createStore, combineReducers,applyMiddleware } from 'redux'
import Global from './modules/global/reducer';
import Info from './modules/info/reducer';
import Order from './modules/order/reducer';
import thunk from 'redux-thunk'
//devtools
import { composeWithDevTools } from 'redux-devtools-extension'

//集合模块
const reducer = combineReducers({
    Global,
    Info,
    Order
})

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;