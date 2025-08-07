import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "/api/coupons";

export const applyCoupon = createAsyncThunk("coupon/applyCoupon", async({apply, code, orderValue, jwt}, {rejectWithValue}) => {
    try{
        const response = await api.post(`${API_URL}/apply`,null,{
            params : {apply,code, orderValue},
            headers : {Authorization : `Bearer ${jwt}`},
        });
        console.log("Apply coupon",response.data);
        return response.data;
    }
    catch(error){
        console.log("error ",error);
        return rejectWithValue(error.response?.data.error || "Failed to apply coupon");
    }
})

const initialState = {
    coupons : [],
    cart : null,
    loading : false,
    error : null,
    couponCreated : false,
    couponApplied : false,
};

const couponSlice = createSlice({
    name : "coupon",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(applyCoupon.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.couponApplied = false;
        })
        .addCase(applyCoupon.fulfilled, (state,action) => {
            state.loading =false;
            state.cart = action.payload;

            if(action.meta.arg.apply == "true"){
                state.couponApplied = true
            }
        })
    }
})