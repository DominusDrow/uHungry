import { LOGIN, LOGOUT, LOGIN_ADMIN} from '../actions/authActions'

const initialState = {
    user: 'guest',
    status: 'comprando',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                ...state,
                user: action.login,
            }
        case LOGIN_ADMIN:
            return{
                ...state,
                user: 'admin',
            }
        case LOGOUT:
            return{
                user: 'guest',
            }
    }
    return state;
}

