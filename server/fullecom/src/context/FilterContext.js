import React, { createContext, useContext, useReducer,useEffect } from 'react'
import { useProductContext } from './ProductContext';
import reducer from '../reducer/FilterReducer'


const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:'lowest',
    filters:{
        text:"",
        category:'All',
        company:'All',
        maxPrice:0,
        price:0,
        minPrice:0,
    }
}                  

export const FilterContextProvider=({children})=>{
   
    const [state,dispatch]=useReducer(reducer,initialState);

    const {products}=useProductContext();
    

    // TO USE GRID VIEW
    const setGridView=()=>{
        return dispatch({type:"SET_GRID_VIEW"})
    }
    

    //TO USE LIST VIEW
    const setListView=()=>{
        return dispatch({type:"SET_LIST_VIEW"})
    }


    //sorting fucnction section
   
    const sorting=(event)=>{
        let userValue=event.target.value;
        dispatch({type:"GET_SORT_VALUE",payload:userValue});
    }
    
   
    //update the filter values

    const updateFilterValue=(event)=>{
          let name=event.target.name;
          let value=event.target.value;
          return dispatch({type:'UPDATE_FILTERS_VALUE',payload:{name,value}})
    }


            ///------ i tryed by my self this laptopsection}}}}


            //// to clear filters
   const clearFilters=()=>{
        dispatch({type:'CLEAR_FILTERS'});
   }                      



    useEffect(()=>{
         dispatch({type:"FILTER_PRODUCTS"})
         dispatch({type:"SORTING_PRODUCTS"})
    },[state.sorting_value,state.filters]);

    //---------END---sorting Function

  
    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    },[products])
    

    


    return(
        <FilterContext.Provider value={ {...state,setGridView,setListView,sorting,updateFilterValue,clearFilters }}>{children}</FilterContext.Provider>
    )
}

export const useFilterContext=()=>{
    return useContext(FilterContext);
}