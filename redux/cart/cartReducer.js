import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    total:0,
    items:[],
    cantidadItems:0,
    statusOrder: 'pendiente'
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { item, count } = action.payload;
            
            const isItem = state.items.find(itemABuscar => itemABuscar == item);
            
            if(isItem){
                item.quantity = count;
                
                state.total += item.cost*count;
                state.cantidadItems += count;
            }
            if(item.quantity == 0){
                item.id = Math.floor(Math.random() * 1001).toString();
                item.quantity = count;

                state.total += item.cost*count;
                state.items = state.items.push(item);
                state.cantidadItems += count;
            }
        },
        
        plusItem: (state, action) => {
            const item = action.payload;

            item.quantity = item.quantity+1;
            
            state.total += item.cost;
            state.cantidadItems += 1;
        },
        
        minusItem: (state, action) => {
            const item = action.payload;

            if(item.quantity == 1){
                const valorARestar = item.quantity;

                const nuevoItems = state.items.filter(itemABorrar => itemABorrar.id != item.id);
                
                state.total -= item.cost*valorARestar;
                state.items = nuevoItems;
                state.cantidadItems -= 1;

            } else {
                state.total -= item.cost;
                state.cantidadItems -= 1;
            }
        },
        
        deleteItem: (state, action) => {
            const item = action.payload;

            const valorARestar = item.quantity;
            const nuevoItems = state.items.filter(itemABorrar => itemABorrar.id != item.id)
            
            state.total -= item.cost*valorARestar;
            state.items = nuevoItems;
            state.cantidadItems -= valorARestar;
        },
        
        deleteAllItems: (state) => {
            state.total = 0;
            state.items = [];
            state.cantidadItems = 0;

        }
    }
})

export const { addToCart, plusItem, minusItem, deleteItem, deleteAllItems } = cartSlice.actions
export default cartSlice.reducer
