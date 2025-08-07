import React from 'react'
import { useFormik } from 'formik'
import { Stack, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

const CreateDealForm = () => {
    const formik = useFormik({
        initialValues: {
            discount: 0,
            category: ""
        },
        onSubmit: (values) => {
            console.log("Submit", values)
        }
    })
    return (
        <Stack component={"form"} onSubmit={formik.handleSubmit} spacing={3} >


            <Typography variant='h4' className='text-center'>Create Deals</Typography>


            <TextField fullWidth name='discount' label='Discount' value={formik.values.discount} onChange={formik.handleChange} error={formik.touched.discount && Boolean(formik.errors.discount)}
                helperText={formik.touched.discount && formik.errors.discount}>
            </TextField>


            <FormControl fullWidth>
                <InputLabel id="Category">Category</InputLabel>
                <Select
                    labelId="Category"
                    id="Category"
                    value={formik.values.category}
                    label="Category"
                    onChange={formik.handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>


            <Button fullWidth sx={{py:".9rem"}} type='submit' variant='contained'>Create deal</Button>
        </Stack>
    )
}

export default CreateDealForm;
