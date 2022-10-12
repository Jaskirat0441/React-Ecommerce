const productReducer = (state,action) => {

    switch (action.type) {
        case "API_LOADING":
            return{
                ...state,
                isLoading:true
            }
                
        case "API_PRODUCTS":
           const featuredData = action.payload.filter((elem)=>{
            return elem.featured ===true;
           });

           return{
            ...state,
            isLoading:false,
            products :action.payload,
            featuredProducts : featuredData,
           }
    
        case "API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            } 
    
        default:
            break;
    }

}

export default productReducer