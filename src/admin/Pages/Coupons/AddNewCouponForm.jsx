import { useFormik } from 'formik'
import React from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button,Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';


// interface CouponFormValues{
//   code : String,
//   discountPercentage : Number,
//   validityStartDate : Dayjs | null,
//   validityEndDate : Datejs | null,
//   minimumOrderValue : number
// }

const AddNewCouponForm = () => {

  // const formik = useFormik<CouponFormValues>({
  const formik = useFormik({

    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0
    },
    onSubmit: (values) => {
      const formatedValues = {
        ...values,
        validityStartDate: values.validityStartDate?.toISOString(),
        validityEndDate: values.validityEndDate?.toISOString()
      }
      console.log("form submitted ", values, formatedValues)
    }
  })

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-2xl text-[var(--primary-color)]'>
        Create new Coupon
      </h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box  component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid className='space-y-4' container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth name='code' label='Coupon Code' value={formik.values.state} onChange={formik.handleChange} error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth type='number' name='discountPercentage' label='Discount Percentage' value={formik.values.discountPercentage} onChange={formik.handleChange} error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}/>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <DatePicker sx={{width:"100%"}} name='Validity Start Date' onChange={formik.handleChange} value={formik.values.validityStartDate}/>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <DatePicker sx={{width:"100%"}} name='Validity End Date' onChange={formik.handleChange} value={formik.values.validityEndDate}/>
            </Grid>
            <Grid>
            <TextField fullWidth type='number' name='minimumOrderValue' label='Minimum Order Value' value={formik.values.minimumOrderValue} onChange={formik.handleChange} error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue} />
            </Grid>
            <Grid className="flex justify-center items-center rounded-md" size={{xs:12}}>
            <Grid size={{xs:12, sm:12, lg:6}}>
              <Button fullWidth variant='contained'>
                Create Coupon
              </Button>
            </Grid>
            </Grid>
          </Grid>
        </Box>
              </LocalizationProvider>
    </div>
  )
}

export default AddNewCouponForm;
