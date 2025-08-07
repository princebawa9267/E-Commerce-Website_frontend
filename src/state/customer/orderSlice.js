import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import axios from "axios";
import reducer from "./cartSlice";
import { toast } from "react-toastify";

const initialState = {
    orders : [],
    orderItem : null,
    currentOrder : null,
    paymentOrder : null,
    loading : false,
    error : null,
    orderCancelled : false
};

const API_URL = "/api/orders";

export const fetchUserOrderHistory = createAsyncThunk("/orders/fetchUserOrderHistory",
    async(jwt, {rejectWithValue}) => {
        try{
            const response = await api.get(`${API_URL}/user`,{
                headers : {
                    Authorization : `Bearer ${jwt}`
                },
            });
            console.log("Order history fetched ",response.data);
            return response.data;
        }
        catch (error){
            console.log("error ",error.response);
            return rejectWithValue(
                error.response.data.error || "Failed to fetch order history"
            )
        }
    }
)

// Fetch order by Id
export const fetchOrderById = createAsyncThunk("orders/fetchOrderById",
    async({orderId, jwt}, {rejectWithValue}) => {
        try{
            const response = await api.get(`${API_URL}/${orderId}`,{
                headers : {Authorization : `Bearer ${jwt}`},
            });
            console.log("order fetched ",response.data);
            return response.data;
        }
        catch(error){
            console.log("Error ",error.response);
            return rejectWithValue("Failed to fetch order");
        }
    }
);

// Create a new order
export const createOrder = createAsyncThunk("orders/createOrder",
    async({address,jwt,paymentGateway},{rejectWithValue}) => {
        try{
            const response = await api.post(API_URL,address,{
                headers : {Authorization : `Bearer ${jwt}`},
                params : {paymentMethod : paymentGateway}
            });
            console.log("Order created ",response.data);
            if(response.data.payment_link_url){
                window.location.href= response.data.payment_link_url
            }
            return response.data;
        }
        catch(error){
            console.log("Error ",error.response);
            toast.error("Failed to create order")
            return rejectWithValue("Failed to create order");
        }
    }
);

export const fetchOrderItemById = createAsyncThunk(
    "orders/fetchOrderItemById", async({orderItemId,jwt},{rejectWithValue}) => {
        try{
            const response = await api.get(`${API_URL}/item/${orderItemId}` ,{
                headers : {
                    Authorization : `Bearer ${jwt}`
                },
            });
            console.log("Order item fetched ",response.data);
            return response.data;
        }
        catch(error){
            console.log("Error ",error.response);
            return rejectWithValue("Failed to create order ");
        }
    }
);

// Payment success 
export const paymentSuccess = createAsyncThunk("orders/paymentSuccess",async({paymentId,jwt,paymentLinkId}, {rejectWithValue}) =>{
    try{
        const response = await api.get(`/api/payment/${paymentId}`,{
            headers : {
                Authorization : `Bearer ${jwt}`,
            },
            params : {paymentLinkId}
        });
        console.log("payment success ",response.data)

        return response.data;
    }
    catch(error){
        console.log("Error ",error.response)
        if(error.response){
            return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue("Failed to process payment");
    }
});

export const cancelOrder = createAsyncThunk('order/cancelOrder',
    async(orderId,{rejectWithValue}) => {
        try{
            const response = await api.put(`${API_URL}/${orderId}/cancel`,{},{
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            console.log("cancel order ",response.data)
            return response.data;
        }
        catch(error){
            console.log("Error ".error.response)
            if(axios.isAxiosError(error) && error.response){
                return rejectWithValue(error.response.data);
            }
        }
    }
);

const orderSlice = createSlice({
    name : "orders",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchUserOrderHistory.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.orderCancelled = false;
        })
        .addCase(
            fetchUserOrderHistory.fulfilled,(state,action) => {
                state.orders = action.payload;
                state.loading = false;
            }
        )
        .addCase(fetchUserOrderHistory.rejected , (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchOrderById.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchOrderById.fulfilled,(state,action) => {
            state.currentOrder = action.payload;
            state.loading = false;
        })
        .addCase(fetchOrderById.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload
        })
        .addCase(createOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createOrder.fulfilled, (state,action) => {
            state.paymentOrder = action.payload;
            state.loading = false;
        })
        .addCase(createOrder.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchOrderItemById.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchOrderItemById.fulfilled, (state,action) => {
            state.loading =false;
            state.orderItem = action.payload;
        })
        .addCase(fetchOrderItemById.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(paymentSuccess.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        // .addCase(paymentSuccess.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;
        // })
        // .addCase(paymentSuccess.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;
        // })
        .addCase(paymentSuccess.fulfilled , (state,action) => {
            state.loading = false;
            console.log("Payment successful : ", action.payload);
        })
        .addCase(paymentSuccess.rejected, (state,action) => {
            state.loading =false;
            state.error = action.payload;
        })
        .addCase(cancelOrder.pending, (state)=> {
            state.loading = true;
            state.error = null;
            state.orderCancelled = false;
        })
        .addCase(cancelOrder.fulfilled , (state,action) => {
            state.loading = false;
            state.orders = state.order.map((order) => order.id === action.payload.id ? action.payload : order);
            state.orderCancelled = true;
            state.currentOrder = action.payload
        })
        .addCase(cancelOrder.rejected , (state,action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default orderSlice.reducer;