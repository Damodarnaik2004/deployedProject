import React from 'react'
// import { useCosHook } from '../components/Sort'

const FilterReducer = (state,action) => {
        // const d=useCosHook();
    
   
    
    
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);
           let maxPrice=Math.max(...priceArr);
           console.log(maxPrice);


             return {
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload],
                filters:{
                    ...state.filters,maxPrice,price:maxPrice
                },
             }

        case "SET_GRID_VIEW":
        return {
            ...state,
            grid_view:true,
        }

        case 'SET_LIST_VIEW':
            return {
                ...state,
                grid_view:false,
            }
             
        case "GET_SORT_VALUE":
            // let userSortValue=document.getElementById("sort");
            // let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sort_value)
            return{
                ...state,
                sorting_value:action.payload,
            }
              

            ////  ------- sort section
        case 'SORTING_PRODUCTS':
            let newSortData;
            // let tempSortProduct=[...action.payload];

            const {filter_products}=state;
            let tempSortProduct=[...filter_products]

            const sortingProducts=(a,b)=>{
                if(state.sorting_value==='a-z'){
                     return a.name.localeCompare(b.name)
                }
                if(state.sorting_value==='z-a'){
                    return b.name.localeCompare(a.name)
                }
                if(state.sorting_value==='lowest'){
                    return a.price-b.price
                }
                if(state.sorting_value==='highest'){
                    return b.price-a.price
                }
                

            }

      


            newSortData=tempSortProduct.sort(sortingProducts)
            return{
                ...state,
                filter_products:newSortData
            }


            //////----------  filter section

            case 'UPDATE_FILTERS_VALUE':
                const {name,value}=action.payload;
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        [name]:value,
                    }
                }


                

            case "FILTER_PRODUCTS":

                let {all_products} = state;
                let tempFilterProduct=[...all_products];

                const {text,category,company,price}=state.filters;
            
                if(text){
                    tempFilterProduct=tempFilterProduct.filter((curElem)=>{
                        return curElem.name.toLowerCase().includes(text);
                    })
                }

                

                if(category !='All'){
                    tempFilterProduct=tempFilterProduct.filter((curElem)=>{
                          return curElem.category===category;
                    })
                }

                if(company !='All'){
                    tempFilterProduct=tempFilterProduct.filter((curElem)=>{
                        return curElem.company.toLowerCase()===company.toLowerCase();
                  })
                }
                
                if(price){
                    tempFilterProduct=tempFilterProduct.filter((curElem)=>{
                        return curElem.price<=price;
                  })
                }


                return {
                    ...state,
                    filter_products:tempFilterProduct,
                }

                case "CLEAR_FILTERS":
                    return {
                      ...state,
                      filters: {
                        ...state.filters,
                        text:"",
                        category:"All",
                        company:"All", 
                        maxPrice: state.filters.maxPrice,
                        price: state.filters.maxPrice,
                        minPrice:0,
                      },
                    };
              
         
        default:
            return state;
    }
}

export default FilterReducer