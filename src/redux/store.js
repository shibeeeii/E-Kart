import { configureStore } from "@reduxjs/toolkit";
import whishlistSlice from "./slice/whishlistSlice";
import  cartSlice from "./slice/cartSlice";




const store = configureStore({
    reducer:{
        whishlist:whishlistSlice,
       cartItem:cartSlice

    }

})
export default store