import { createSlice } from "@reduxjs/toolkit";



export const whishlistSlice = createSlice({
    name:'whishlist',
    initialState:[],
    reducers:{
        // to add items to the state
        addWishlistItem :(state, action)=>{
            state.push(action.payload)
        },
        removeWhishlistItem :(state, action)=>{
           return state.filter((item)=>item.id != action.payload)

        }
    }
})
export const{addWishlistItem, removeWhishlistItem}= whishlistSlice.actions

export default whishlistSlice.reducer