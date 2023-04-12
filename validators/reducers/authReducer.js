import {LOGIN} from '../actions/authActions'

const initialState = {
    login: false,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return{
                login: true,
            }
    }
    return state;
}
