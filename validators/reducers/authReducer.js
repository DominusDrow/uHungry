import { LOGIN, LOGOUT } from '../actions/authActions'

const initialState = {
    login: 'guest',
}

export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                login: action.login,
            }
        case LOGOUT:
            return{
                login: 'guest',
            }
    }
    return state;
}

