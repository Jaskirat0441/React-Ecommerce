import { createContext,useEffect,useReducer,useContext } from "react";
import axios from "axios";
import productReducer from "../Reducer/productReducer";

const AppContext= createContext();

const API = "https://jaskiratproductsapi.herokuapp.com/products";

const initialState ={
    isLoading : false,
    isError : false,
    featuredProducts:[],
    products: []
}
const AppProvider = ({children}) =>{
 
    const  [state, dispatch] = useReducer(productReducer, initialState);


    const getProducts = async (url)=>{
        dispatch({type:"API_LOADING"});
        try {
            const res= await axios.get(url);
            const products =await res.data;
            dispatch({type:"API_PRODUCTS",payload:products});
    } catch (error) {
        dispatch({type:"API_ERROR"});
    }

    }

    useEffect(() => {
      getProducts(API);
    
   
    }, [])

    // console.log(state);
    
       return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
       )
};

// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
  };

export {AppProvider ,AppContext ,useProductContext};