import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";
const CartContext=createContext();

const initialState={
    cart:[],
    total_item:"",
    total_price:"",
    shippig_fee:200000,
}

const CartProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState);

    const addToCart=(id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
    };


    //to add or remove in cart section
    const setIncrease=(id)=>{
        //  amount<stock ? setAmount(amount+1):setAmount(stock);
        dispatch({type:"SET_INCREMENT",payload:id});  // to increase in cart page of a product
        dispatch({type:"CART_TOTAL_ITEM"})  //total items in car nav bar
        dispatch({type:"CART_TOTAL_PRICE"})
      }

      const setDecrease=(id)=>{
        dispatch({type:"SET_DECREMENT",payload:id});
        dispatch({type:"CART_TOTAL_ITEM"})
        dispatch({type:"CART_TOTAL_PRICE"})
      }

    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    // to clear cart
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"})
    }
   

    useEffect(()=>{
        dispatch({type:"CART_TOTAL_ITEM"})
       dispatch({type:"CART_TOTAL_PRICE"})
    },[state.cart.length])

    return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setIncrease,setDecrease}}>{children}</CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartContext}