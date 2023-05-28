import { CLOSE_LOGIN, OPEN_LOGIN } from './actionType'

export const closeLogin = () => {
    return { type: CLOSE_LOGIN }
}

export const openLogin = () => {
    return { type: OPEN_LOGIN }
}