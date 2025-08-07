import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice"
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/productSlice"
import authSlice from "./authSlice"
import cartSlice from "./customer/cartSlice"
import orderSlice from "./customer/orderSlice";
import wishlistSlice from './customer/wishlistSlice'
import sellerOrderSlice from "./seller/sellerOrderSlice";
import transactionSlice from "./seller/transactionSlice";

// 1. Combine your reducers here
const rootReducer = combineReducers({
  seller : sellerSlice,
  sellerProduct : sellerProductSlice,
  product : productSlice,
  auth : authSlice,
  cart : cartSlice,
  order : orderSlice,
  wishlist : wishlistSlice,
  sellerOrder : sellerOrderSlice,
  transactions : transactionSlice
});

// 2. Create the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

// 3. Custom hooks (for convenience)
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;