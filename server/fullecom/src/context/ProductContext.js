// Create a context
// Provider
// consumer=>useContext

import axios from "axios";
import { createContext,useContext, useEffect, useReducer } from "react";
import  reducer from "../reducer/ProductReducer";


const API='https://api.pujakaitem.com/api/products';

const AppContext=createContext();

const initialstate={
     isLoading:false,
     isError:false,
     products:[],
     featureProducts:[],
     isSingleLoading:false,
     singleProduct:{},
}


const AppProvider=({children})=>{


     const [state,dispatch]=useReducer(reducer,initialstate);
// 1st start edhi
     const getProduct=async(url)=>{
          dispatch({type:'SET_LOADING'});
          try{
          const res=await axios.get(url);
          const products= await res.data;
          // axios.get(url): This call returns a Promise that resolves to an Axios response object, which contains various properties including data, status, statusText, headers, etc. The await keyword is used here to wait for the Promise to resolve.
          //  res.data: Once the Promise is resolved, res is the response object, and res.data contains the actual data received from the API.
          // here no need of await in res.data
          dispatch({type:'SET_API_DATA',payload:products})
          }
          catch(error){
               dispatch({type:'API_ERROR'});
          }
     }
  //1 st dhi end edhi
  
     // 2nd api for single page application purpose
       const getSingleProduct=async(url)=>{
          dispatch({type:'SET_SINGLE_LOADING'})
          try{
            const res=await axios.get(url);
            const singleProduct=await res.data;
            dispatch({type:'SET_SINGLE_PRODUCT',payload:singleProduct})
          }
          catch(error){
            dispatch({type:'SET_SINGLE_ERROR'})
          }
       }






     //1st api for home section
     useEffect(()=>{

        getProduct(API);
     },[]);



     
       return <AppContext.Provider  value={{...state,getSingleProduct}}>{children}</AppContext.Provider>
};


//costum hook

const useProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext};



