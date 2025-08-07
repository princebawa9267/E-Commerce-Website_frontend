import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

const API_URL = "/products"

export const fetchProductById = createAsyncThunk("products/fetchProductById",
    async(productId , {rejectWithValue}) => {
        try{
            const response = await api.get(`${API_URL}/${productId}`);
            const data = response.data;
            console.log("data: ",data)
            return data
        } catch(error){
            console.log("error : ",error)
            rejectWithValue(error.message)
        }
    }
)

export const searchProduct = createAsyncThunk("products/searchProduct",
    async(query , {rejectWithValue}) => {
        try{
            const response = await api.get(`${API_URL}/search`,{
                params : {
                    query,
                }
            });
            const data = response.data;
            console.log("Search product data: "+data)
            return data
        } catch(error){
            console.log("error : "+error)
            rejectWithValue(error.message)
        }
    }
)

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts",
    async(params , {rejectWithValue}) => {
        try{
            const response = await api.get(`${API_URL}`,{
                params : {
                    ...params,
                    pageNumber:params.pageNumber || 0
                }
            });
            const data = response.data;
            console.log("All product data: ", data)
            return data;
        } catch(error){
            console.log("error : ",error)
            rejectWithValue(error.message)
        }
    }
)



const initialState = {
    product : null,
    products : [],
    totalPages : 1,
    loading : false,
    error : null,
    searchProduct : [],
    // sortItems : [],
    // sortBy : "none"
}

// const sortByPrice = (products, direction = "asc") => {
//     return [...products].sort((a, b) =>
//       direction === "asc"
//         ? a.sellingPrice - b.sellingPrice
//         : b.sellingPrice - a.sellingPrice
//     );
//   };

const productSlice = createSlice({
    name : "products",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchProductById.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchProductById.fulfilled,(state , action) => {
            state.loading = false;
            state.product = action.payload;
        });
        builder.addCase(fetchProductById.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        });


        builder.addCase(fetchAllProducts.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchAllProducts.fulfilled,(state , action) => {
            state.loading = false;
            state.products = action.payload.content;
            state.totalPages = action.payload.totalPages;
        });
        builder.addCase(fetchAllProducts.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        });


        builder.addCase(searchProduct.pending, (state) => {
            state.loading = true
        });
        builder.addCase(searchProduct.fulfilled,(state , action) => {
            state.loading = false;
            state.product = action.payload;
        });
        builder.addCase(searchProduct.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export const { sortProductsByPrice } = productSlice.actions;
export default productSlice.reducer;