import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { toast } from "react-toastify";

export const fetchSellerProfile = createAsyncThunk("/sellers/fetchSellerProfile",
    async (jwt, { rejectWithValue }) => {
        try {
            const response = await api.get("/sellers/profile", {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            console.log(response.data);
            console.log("Seller fetched : ",response.data);
            return response.data;
        }
        catch (error) {
            console.log("error ------ ", error)
        }
    }
)

// export const sellerLogin = createAsyncThunk("/sellers/sellerLogin",
//     async (loginRequest, { rejectWithValue }) => {
//         console.log(loginRequest);
//         try {
//             const response = await api.post("/sellers/login", loginRequest);
//             console.log("Login response", response);
//             localStorage.setItem("jwt", response.data.jwt);
//             return response.data;
//         } catch (error) {
//             console.log("error ------ ", error);
//             return rejectWithValue(
//                 error.response?.data?.message || "Failed to send OTP"
//             );
//         }
//     }
// );

export const sellerLogin = createAsyncThunk("/sellers/sellerLogin",
    async ({ loginRequest, navigate }, { rejectWithValue }) => {
        console.log(loginRequest);
        try {
            const response = await api.post("/sellers/login", loginRequest);
            console.log("Login response", response);
            localStorage.setItem("jwt", response.data.jwt);
            navigate("/seller/orders");
            return response.data;
        } catch (error) {
            console.log("error ------ ", error);
            return rejectWithValue(
                error.response?.data?.message || "Failed to login"
            );
        }
    }
);

export const sellerLogout = createAsyncThunk("/auth/sellerLogout",
    async (navigate, { rejectWithValue }) => {
        try {
            localStorage.clear()
            console.log("Logout success")
            navigate("/")
        }
        catch (error) {
            console.log("Error - - - ", error);
        }
    }
)


const initialState = {
    sellers: [],
    selectedSeller: null,
    profile: null,
    report: null,
    loading: false,
    error: null,
    jwt: null,
    isLoggedIn: false,
    seller: null,
}

const sellerSlice = createSlice({
    name: "sellers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSellerProfile.pending, (state) => {
            state.loading = true;
        })
            .addCase(fetchSellerProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profile = action.payload;
            })
            .addCase(fetchSellerProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(sellerLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(sellerLogin.fulfilled, (state, action) => {
                state.jwt = action.payload.jwt;
                state.isLoggedIn = true;
                state.loading = false;
                toast.success("You logged in as Seller")
                // state.otpSent = true;
            })
            .addCase(sellerLogin.rejected, (state) => {
                state.loading = false;
                // state.otpSent = false;
            })
            .addCase(sellerLogout.fulfilled, (state) => {
                    state.sellers= [];
                    state.selectedSeller = null;
                    state.profile = null;
                    state.report = null;
                    state.error = null;
                    state.jwt = null;
                    state.isLoggedIn = false;
                    state.seller = null;
                    state.loading = false;
                    toast.success("You logged out successfully")
            })
    }
})

export default sellerSlice.reducer;