import { Box, Button, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup"
import { useAppDispatch } from '../../../state/store';
import { createOrder } from '../../../state/customer/orderSlice';
import { addUserAddresses } from '../../../state/authSlice';

const AddressFormSchema = Yup.object().shape({
    name : Yup.string().required("Name is required"),
    mobile : Yup.string().required("Mobile number is required").matches(/^[6-9]\d{9}$/,"Invalid mobile number"),
    pinCode : Yup.string().required("Pin code is required").matches(/^[1-9][0-9]{5}$/,"Invalid pin code"),
    address : Yup.string().required("Address is required"),
    city : Yup.string().required("City is required"),
    state : Yup.string().required("State is required"),
    locality : Yup.string().required("Locality is required")
})


const AddressForm = ({paymentGateway}) => {

    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            mobile: "",
            pinCode: "",
            address: "",
            city: "",
            state: "",
            locality: ""
        },
        validationSchema: AddressFormSchema,
        onSubmit: (values) => {
            dispatch(addUserAddresses({jwt : localStorage.getItem("jwt"), address : values}))
            // dispatch(createOrder({address : values, jwt : localStorage.getItem("jwt") || "" , paymentGateway : paymentGateway }))
            console.log(values);
        },
    });

    return (
        <Box sx={{ minWidth:"250px", max: "auto" }}>
            <p className='text-xl font-bold text-center pb-5'>
                Contact Details
            </p>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                     <Grid size={{ xs: 12 }}>
                        <TextField fullWidth name='name' label='Name' value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField fullWidth name='mobile' label='Mobile' value={formik.values.mobile} onChange={formik.handleChange} error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField fullWidth name='pinCode' label='Pin Code' value={formik.values.pinCode} onChange={formik.handleChange} error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                            helperText={formik.touched.pinCode && formik.errors.pinCode}>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField fullWidth name='address' label='Address' value={formik.values.address} onChange={formik.handleChange} error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <TextField fullWidth name='city' label='City' value={formik.values.city} onChange={formik.handleChange} error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField fullWidth name='state' label='State' value={formik.values.state} onChange={formik.handleChange} error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}>
                        </TextField>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField fullWidth name='locality' label='Locality' value={formik.values.locality} onChange={formik.handleChange} error={formik.touched.locality && Boolean(formik.errors.locality)}
                            helperText={formik.touched.locality && formik.errors.locality}>
                        </TextField>
                    </Grid>
                    <Grid>
                        <Button type='submit' variant='contained' sx={{py:"14px"}}>
                            Add Address
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default AddressForm;
