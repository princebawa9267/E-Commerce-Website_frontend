import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { useFormik } from 'formik';
import { Button, CircularProgress, TextField } from '@mui/material';
import { sendLoginSignupOtp, signup } from '../../../state/authSlice';

const RegisterForm = () => {

  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(store => store)


  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      full_name: ""
    },
    onSubmit: (values) => {
      console.log("form-data ", values)
      dispatch(signup(values))
    }
  })

  const handleSentOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  }

  return (
    <div>
      <h1 className='text-center font-bold text-2xl text-[var(--primary-color)] pb-8'>Signup</h1>
      <div className='flex flex-col space-y-5'>
        <div>
          <TextField fullWidth name='email' label="Email " value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
        </div>
        {
          auth.otpSent ?
            <div className='space-y-2'>
              <p className='font-medium text-sm opacity-60'>Enter otp sent to your email</p>
              <TextField fullWidth name='otp' label="Otp " value={formik.values.otp} onChange={formik.handleChange} error={formik.touched.otp && Boolean(formik.errors.otp)} helperText={formik.touched.otp && formik.errors.otp} />
            </div> : ""
        }
        {
          auth.otpSent ? <div>
          <TextField fullWidth name='full_name' label="Full Name" value={formik.values.full_name} onChange={formik.handleChange} error={formik.touched.full_name && Boolean(formik.errors.full_name)} helperText={formik.touched.full_name && formik.errors.full_name} />
        </div> : ""
        }
        

        {
          auth.otpSent ? <Button onClick={formik.handleSubmit} fullWidth variant='contained' sx={{ py: "11px" }}>
            Signup
          </Button> : <Button onClick={handleSentOtp} fullWidth variant='contained' sx={{ py: "11px" }}>
            {auth.loading ? <CircularProgress size={24} color='white' /> : "sent otp"}
          </Button>
        }
      </div>
    </div>
  )
}

export default RegisterForm
