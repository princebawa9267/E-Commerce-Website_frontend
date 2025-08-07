import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useAppDispatch } from "../../../state/store"
import { sendLoginSignupOtp } from '../../../state/authSlice'
// import { sellerLogin } from '../../../state/seller/sellerAuthSlice'
import { useNavigate } from 'react-router'
import { sellerLogin } from '../../../state/seller/sellerSlice'

const SellerLoginForm = () => {

  const dispatch = useAppDispatch();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: ""
    },
    onSubmit: (values) => {
      console.log("form-data ", values)
      dispatch(sellerLogin({loginRequest : values, navigate : navigate}))
    }
  })

  const handleSentOtp = () => {
    console.log("Hello")
    console.log(formik.values.email);
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
    setIsOtpSent(true);
  }

  return (
    <div className='space-y-5'>
      {/* <p className='text-xl font-bold text-center pb-9'>Login</p> */}
      <h1 className='text-center font-bold text-2xl text-[var(--primary-color)] pb-5'>Login as a Seller</h1>
      <div className='flex flex-col space-y-5'>
        <div>
          <TextField fullWidth name='email' label="Email " value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email} />
        </div>
        {
          isOtpSent ?
            <div className='space-y-2'>
              <p className='font-medium text-sm opacity-60'>Enter otp sent to your email</p>
              <TextField fullWidth name='otp' label="Otp " value={formik.values.otp} onChange={formik.handleChange} error={formik.touched.otp && Boolean(formik.errors.otp)} helperText={formik.touched.otp && formik.errors.otp} />
            </div> : ""
        }

        {
          isOtpSent ? <Button onClick={() => formik.handleSubmit()} fullWidth variant='contained' sx={{ py: "11px" }}>
            Login
          </Button> : <Button onClick={handleSentOtp} fullWidth variant='contained' sx={{ py: "11px" }}>
          send otp
        </Button>
        }

      </div>
    </div>
  )
}

export default SellerLoginForm
