import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import { toast } from "react-toastify";

export const sendLoginSignupOtp = createAsyncThunk("/auth/sendLoginSignupOtp",
    async ({ email }, { rejectWithValue }) => {
        // console.log(email);
        try {
            const response = await api.post("/auth/sent/login-signup-otp", { email })
            return response.data;
        }
        catch (error) {
            console.log("error ------ ", error);
            toast.error("Failed to sent OTP");
            error.response?.data?.message || "Failed to sent OTP";
        }
    }
)

export const signin = createAsyncThunk("/auth/signin",
    async ({ loginRequest, navigate }, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/login", loginRequest)
            console.log("Response ", response);
            localStorage.setItem("jwt", response.data.jwt);
            // fetchUserProfile(response.data.jwt)
            navigate("/")
            toast.success("You logged in successfully");
            return response.data.jwt;
        }
        catch (error) {
            console.log("error ------ ", error);
            error.response?.data?.message || "Failed to sent OTP"
        }
    }
)

export const signup = createAsyncThunk("/auth/signup",
    async (signupRequest, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/signup", signupRequest)
            toast.success("Your account created!!")
            localStorage.setItem("jwt", response.data.jwt);
            return response.data.jwt;
        }
        catch (error) {
            console.log("error ------ ", error);
            error.response?.data?.message || "Failed to create account"
        }
    }
)

export const fetchUserProfile = createAsyncThunk("/api/fetchUserProfile",
    async (jwt, { rejectWithValue }) => {
        try {
            const response = await api.get("/api/users/profile", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
            })
            return response.data;
        }
        catch (error) {
            console.log("error ------ ", error);
            error.response?.data?.message || "Failed to get user Profile"
        }
    }
)

// export const fetchUserAddresses = createAsyncThunk("/api/fetchUserAddresses",
//     async (jwt,{rejectWithValue}) => {
//         try{
//             const response = await api.get(`/api/users/addresses` , {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`
//                 },
//             })
//             console.log("Fetched user Addresses");
//              return response.data;
//         }
//         catch(error)
//         {
//             console.log("Error ----- ",error)
//             error.response?.data?.message || "Failed to fetch user Addresses"
//         }
// })

export const addUserAddresses = createAsyncThunk("/api/addUserAddresses",
    async ({jwt,address}, {rejectWithValue}) => {
        try{
            const response = await api.post(`/api/users/addresses` , address, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
            })
            console.log("Added user address successfully");
        }
        catch(error)
        {
            console.log("Error ----- ",error)
            error.response?.data?.message || "Failed to add user address"
        }
})

export const logout = createAsyncThunk("/auth/logout",
    async (navigate, { rejectWithValue }) => {
        try {
            localStorage.clear()
            navigate("/")
            
        }
        catch (error) {
            console.log("Error - - - ", error);
        }
    }
)


const initialState = {
    jwt: null,
    otpSent: false,
    user: null,
    loading: false,
    isLoggedIn : false,
    addresses: []
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(sendLoginSignupOtp.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(sendLoginSignupOtp.fulfilled, (state) => {
            state.loading = false;
            state.otpSent = true;
        })

        builder.addCase(sendLoginSignupOtp.rejected, (state) => {
            state.loading = false;
            state.otpSent = false;
        })

        builder.addCase(signin.fulfilled, (state, action) => {
            state.jwt = action.payload
            state.isLoggedIn = true;
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            state.jwt = action.payload
            state.isLoggedIn = true
        })
        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            console.log("Action ", action.payload);
            state.jwt = localStorage.getItem("jwt")
            state.user = action.payload
        })

        // builder.addCase(fetchUserAddresses.pending ,(state) => {
        //     state.loading = true;
        // })
        // builder.addCase(fetchUserAddresses.fulfilled , (state,action) => {
        //     state.loading = false;
        //     state.addresses = action.payload; 
        // })
        // builder.addCase(fetchUserAddresses.rejected , (state) => {
        //     state.loading = false;
        // })
        builder.addCase(addUserAddresses.pending,(state) => {
            state.loading = true;
        })
        builder.addCase(addUserAddresses.fulfilled,(state) => {
            state.loading = false;
        })
        builder.addCase(addUserAddresses.rejected,(state) => {
            state.loading = false;
        })

        builder.addCase(logout.fulfilled, (state) => {
            state.jwt = null
            // state.isLoggedIn = false
            state.user = null
            state.otpSent = false
            state.addresses = []
        })
    }
})

export default authSlice.reducer;