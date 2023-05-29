import { LOGIN, LOGOUT, LOGIN_ADMIN, UPDATE_STATUS, UPDATE_IDPEDIDO } from "../actions/authActions";

const initialState = {
    user: 'guest',
    status: 'comprando',
    Idpedido: '',
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
        case UPDATE_STATUS:
            return{
                ...state,
                status: action.status,
            }
        case UPDATE_IDPEDIDO:
            return{
                ...state,
                Idpedido: action.id,
            }

    }
    return state;
}

