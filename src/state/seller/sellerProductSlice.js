import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { toast } from "react-toastify";

export const fetchSellerProducts = createAsyncThunk(
    "sellers/fetchSellerProducts",
    async(jwt,{rejectWithValue}) =>{
        try{
            const response = await api.get("/sellers/products",{
                headers : {
                    Authorization : `Bearer ${jwt}`,
                },
            })
            const data = response.data;
            console.log("Seller Products ",data)
            return data;
        }
        catch(error){
            console.log("Error - - - ",error);
            throw error;
        }
    }
)

export const createProduct = createAsyncThunk(
    "/sellerProduct/createProduct",
    async(args,{rejectWithValue}) => {
        const {request,jwt} = args;
        try{
            const response = await api.post("/sellers/products",request,{
                headers : {
                    Authorization : `Bearer ${jwt}`
                },
            })
            toast.success("Product Created");
            console.log("Product Created ",response.data)
            return response.data;
        } catch(error){
            toast.error("Product not created")
            console.log("error --- ",error);
            // throw error;
        }
    }
)

const initialState = {
    products : [],
    loading : false,
    error : null,
}

const sellerProductSlice = createSlice({
    name : "sellerProduct",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(fetchSellerProducts.pending,(state) => {
            state.loading = true;
        })
        builder.addCase(fetchSellerProducts.fulfilled,(state,action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(fetchSellerProducts.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        })


        builder.addCase(createProduct.pending,(state) => {
            state.loading = true;
        });
        builder.addCase(createProduct.fulfilled,(state,action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(createProduct.rejected,(state,action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
}
)

export default sellerProductSlice.reducer;