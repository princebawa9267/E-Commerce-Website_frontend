// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../../config/Api";

// export const sellerLogin = createAsyncThunk("/sellers/sellerLogin",
//     async ({ loginRequest, navigate }, { rejectWithValue }) => {
//         console.log(loginRequest);
//         try {
//             const response = await api.post("/sellers/login", loginRequest);
//             console.log("Login response", response);
//             localStorage.setItem("jwt", response.data.jwt);
//             navigate("/seller");
//             return response.data;
//         } catch (error) {
//             console.log("error ------ ", error);
//             return rejectWithValue(
//                 error.response?.data?.message || "Failed to login"
//             );
//         }
//     }
// );

// export const fetchSellerProfile = createAsyncThunk("/sellers/fetchSellerProfile",
//     async (jwt, { rejectWithValue }) => {
//         console.log(loginRequest);
//         try {
//             const response = await api.get("/sellers/profile", {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`
//                 },
//             })
//             console.log("Seller Profile", response.data)
//             return response.data;
//         } catch (error) {
//             console.log("error ------ ", error);
//             return rejectWithValue(
//                 error.response?.data?.message || "Failed to get seller profile"
//             );
//         }
//     }
// );



// const initialState = {
//     jwt: null,
//     isLoggedIn: false,
//     seller: null,
//     loading: false
// }

// const sellerLoginSlice = createSlice({
//     name: "sellerLogin",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(sellerLogin.pending, (state) => {
//             state.loading = true;
//         })
//         builder.addCase(sellerLogin.fulfilled, (state, action) => {
//             state.jwt = action.payload;
//             state.loading = false;
//             // state.otpSent = true;
//         })
//         builder.addCase(sellerLogin.rejected, (state) => {
//             state.loading = false;
//             // state.otpSent = false;
//         })

//         builder.addCase(fetchSellerProfile.pending, (state) => {
//             state.loading = true;
//         })
//         builder.addCase(fetchSellerProfile.fulfilled, (state, action) => {
//             state.loading = false
//             state.seller = action.payload;
//         })
//         builder.addCase(fetchSellerProfile.pending, (state) => {
//             state.loading = false;
//             state.seller = null;
//         })
        
//     }
// });
