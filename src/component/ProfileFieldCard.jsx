import { Divider } from '@mui/material'
import React from 'react'

const ProfileFieldCard = ({keys,value}) => {
  return (
    <div className='p-2 m-2 rounded-md flex items-center bg-slate-50'>
      <p className='w-20 lg:w-36 pr-5'>{keys}</p>
      <Divider orientation='vertical' flexItem/>
      <p className='pl-4 lg:pl-10 font-semibold'>{value}</p>
    </div>
  )
}

export default ProfileFieldCard
