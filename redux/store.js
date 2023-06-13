import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authentication/authReducer'
import cartReducer from './cart/cartReducer'

export const store = configureStore({
    reducer: {
        authentication: authReducer,
        cart: cartReducer
    }
})