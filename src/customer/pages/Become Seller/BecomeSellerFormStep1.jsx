import { Box, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep1 = ({formik}) => {
  return (
    <Box >
        <p className='text-xl font-bold text-center pb-9'>Contact Details</p>
        <div className='flex flex-col space-y-5'>
            <div>
            <TextField fullWidth name='mobile' label="Mobile" value={formik.values.mobile} onChange={formik.handleChange} error={formik.touched.mobile && Boolean(formik.error.mobile)} helperText={formik.touched.mobile && formik.errors.mobile}/>
            </div>
            <div>
            <TextField fullWidth name='GSTIN' label="GSTIN" value={formik.values.GSTIN} onChange={formik.handleChange} error={formik.touched.GSTIN && Boolean(formik.error.GSTIN)} helperText={formik.touched.GSTIN && formik.errors.GSTIN}/>
            </div>
        </div>
    </Box>
  )
}

export default BecomeSellerFormStep1;
