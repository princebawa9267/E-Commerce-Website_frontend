import { Delete } from '@mui/icons-material'
import {Avatar, Box,Grid, IconButton, Rating } from '@mui/material'

import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between p-2'>

        <Grid className="flex gap-2">
            <Grid size={{xs:1}}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgColor:"#9155FD"}}>Z</Avatar>
                </Box>
            </Grid>
            <Grid size={{xs:9}}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Prince</p>
                        <p className='opacity-70'>2024-03-24 </p>
                    </div>
                </div>
                <Rating readOnly value={4} precision={1} />
                <p>Value for money product, Great product</p>
                <div>
                    <img className='w-24 h-24 object-cover mt-2' src='https://as1.ftcdn.net/v2/jpg/05/43/22/96/1000_F_543229600_4iFlwFap12lF7TCnqglUpKBoTzoiVyqc.jpg'/>
                </div>
            </Grid>
        </Grid>
        <div>

            <IconButton color='error'>
                <Delete />
            </IconButton>
        </div>
      
    </div>
  )
}

export default ReviewCard
