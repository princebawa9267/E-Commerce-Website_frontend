import { TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep4 = ({formik}) => {
  return (
    <div>
      <p className='text-xl font-bold text-center pb-9'>Account Details</p>
                  <div className='flex flex-col space-y-5'>
                      <div>
                          <TextField fullWidth name='businessName' label="Business Name" value={formik.values.businessName} onChange={formik.handleChange} error={formik.touched.businessName && Boolean(formik.error.businessName)} helperText={formik.touched.businessName && formik.errors.businessName} />
                      </div>
                      <div>
                          <TextField fullWidth name='sellerName' label="Seller Name" value={formik.values.sellerName} onChange={formik.handleChange} error={formik.touched.sellerName && Boolean(formik.error.sellerName)} helperText={formik.touched.sellerName && formik.errors.sellerName} />
                      </div>
                      <div>
                          <TextField fullWidth name='email' label="Email Account" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.error.email)} helperText={formik.touched.email && formik.errors.email} />
                      </div>
                      <div>
                          <TextField fullWidth type='password' name='password' label="Password" value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.error.password)} helperText={formik.touched.password && formik.errors.password} />
                      </div>
                  </div>
    </div>
  )
}

export default BecomeSellerFormStep4
