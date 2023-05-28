import { CLOSE_LOGIN, OPEN_LOGIN } from '../action/actionType'

const login = (state = false, action) => {
    switch (action.type) {
        case OPEN_LOGIN:
            return state = true
        case CLOSE_LOGIN:
            return state = false
        default:
            return state
    }
}

export default login