import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {AddUserReducer} from "../compenents/admin/redux/reducer";


const rootReducer = combineReducers({
    addUser: AddUserReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



