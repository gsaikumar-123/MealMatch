import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state,action) =>{
            // Vanilla (older Redux) it has a condition dont mutate state so we should return a new State
            // newState = [...state]
            // newState.item.push(action.payload);
            // return newState

            // Behind the scenes redux is still doing the above process but we no need to write the code as above now
            // Behind the scenes redux uses immer 

            // Redux Toolkit
            // We have to mutate state
            state.items.push(action.payload);
        },
        removeItem : (state) =>{
            state.items.pop();
        },
        clearCart : (state,action) => {
            // state = [] This means we are not mutating the state it means just adding the refrence to it
            state.items.length = 0; // We have to mutate the state to make it empty or return a new State that means return [];
            // return {items :[]} This also works i.e it replaces the original state with this
            // console.log(state) It returns a proxy array we cant read it
            // console.log(current(state)) This works 
        }
    }
});



export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;