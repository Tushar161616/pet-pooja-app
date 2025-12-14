import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers: {
        AddItem : (state,action)=>{
         let exitem = state.find((item)=>item.id === action.payload.id)

         if(exitem){
            return state.map((item)=>item.id === action.payload.id ? {...item,qty:item.qty+1} : item)
         }else{

            state.push(action.payload)
         }
        },

        RemoveItem : (state,action)=>{
            return state.filter((item)=>item.id !== action.payload)
        },

        IncQty : (state,action)=>{
            return state.map((item)=>item.id === action.payload ? {...item,qty:item.qty+1} : item)

        },

        DecQty : (state,action)=>{
            return state.map((item)=>item.id === action.payload ? {...item,qty:item.qty-1} : item)

        }
    }
})


export const {AddItem,RemoveItem,IncQty,DecQty} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;