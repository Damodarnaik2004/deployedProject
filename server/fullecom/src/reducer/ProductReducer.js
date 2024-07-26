

const ProductReducer = (state,action) => {
    if(action.type==='SET_LOADING'){
        return {
            ...state,
            isLoading:true,
        }
    }
    if(action.type==='API_ERROR'){
        return {
            ...state,
            isLoading:false,
            isError:true,
        }
    }
    if(action.type==='SET_API_DATA'){
        const featureData=action.payload.filter((curEelm)=>{
            return curEelm.featured === true;
        });
        return {
            ...state,
            isLoading:false,
            products:action.payload,
            featureProducts:featureData,
        }
        
    }

    // for single page application
    if(action.type==='SET_SINGLE_LOADING'){
        return {
            ...state,
            isSingleLoading:true,
        }
    }
    if(action.type==='SET_SINGLE_ERROR'){
        return {
            ...state,
            isSingleLoading:false,
            isError:true,
        }
    }
    if(action.type==='SET_SINGLE_PRODUCT'){
  
        return {
            ...state,
        isSingleLoading:false,
        singleProduct:action.payload,
        }
    }
  return state;
}

export default ProductReducer