import { combineReducers } from "redux";
import login from "./login";

const rootReducer = combineReducers({
    water() { return 'Redux water' },
    login
})

export default rootReducer