import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: 'guest',
    status: 'comprando',
    Idpedido: '',
    userInfo: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, action) => {
            const { user, userInfo } = action.payload;

            state.user = user;
            state.userInfo = userInfo; 
        },
        loginAdmin: (state) => {
            state.user = 'admin';
        },
        logout: (state) => {
            state.user = 'guest';
            state.userInfo = {};
        },
        updateStatus: (state, action) => {
            state.status = action.payload;
        },
        updateIdPedido: (state, action) => {
            state.Idpedido = action.payload;
        }
    }
})

export const { login, loginAdmin, logout, updateStatus, updateIdPedido } = authSlice.actions
export default authSlice.reducer