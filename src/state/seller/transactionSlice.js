import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../config/Api"

const initialState = {
    transactions : [],
    transaction : null,
    loading : false,
    error : null
}

export const fetchTransactionBySeller = createAsyncThunk("transactions/fetchTransactionBySeller",async(jwt,{rejectWithValue}) => {
    try{
        const response = await api.get("/api/transaction/seller",{
            headers : {
                Authorization : `Bearer ${jwt}`,
            },
        });
        console.log("FetchTransactionBySeller ",response.data)
        return response.data;
    }
    catch(error){
        if(error){
            return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue("Failed to fetch transactions ");
    }
});

export const fetchAllTransaction = createAsyncThunk("transactions/fetchAllTransactions",async(_,{rejectWithValue}) => {
    try{
        const response = await api.get('api/transactions');
        return response.data;
    }
    catch(error){
        if(error.response){
            rejectWithValue(error.response.data.message);
        }
        return rejectWithValue("Failed to fetch all transactions ");
    }
})


const transactionSlice = createSlice({
    name : 'transactions',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchTransactionBySeller.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchTransactionBySeller.fulfilled,(state,action) => {
            state.loading = false;
            state.transaction = action.payload;
        })
        .addCase(fetchTransactionBySeller.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload ;
        })
        .addCase(fetchAllTransaction.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAllTransaction.fulfilled , (state,action) => {
            state.loading = false;
            state.transaction = action.payload;
        })
        .addCase(fetchAllTransaction.rejected , (state,action) => {
            state.loading = false;
            state.error = action.payload ;
        })
    }
})

export default transactionSlice.reducer;