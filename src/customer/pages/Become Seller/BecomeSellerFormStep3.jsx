import { TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep3 = ({formik}) => {
    return (
        <div>
            <p className='text-xl font-bold text-center pb-9'>Account Details</p>
            <div className='flex flex-col space-y-5'>
                <div>
                    <TextField fullWidth name='accountNumber' label="Account Number" value={formik.values.accountNumber} onChange={formik.handleChange} error={formik.touched.accountNumber && Boolean(formik.error.accountNumber)} helperText={formik.touched.accountNumber && formik.errors.accountNumber} />
                </div>
                <div>
                    <TextField fullWidth name='ifscCode' label="IFSC Code" value={formik.values.ifscCode} onChange={formik.handleChange} error={formik.touched.ifscCode && Boolean(formik.error.ifscCode)} helperText={formik.touched.ifscCode && formik.errors.ifscCode} />
                </div>
                <div>
                    <TextField fullWidth name='accountHolderName' label="Account Holder Name" value={formik.values.accountHolderName} onChange={formik.handleChange} error={formik.touched.accountHolderName && Boolean(formik.error.accountHolderName)} helperText={formik.touched.accountHolderName && formik.errors.accountHolderName} />
                </div>
            </div>
        </div>
    )
}

export default BecomeSellerFormStep3
