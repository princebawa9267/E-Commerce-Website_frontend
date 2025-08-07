import React, { useEffect } from 'react'
import ProfileFieldCard from '../../../component/ProfileFieldCard'
import { Divider } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../state/store'
import { fetchUserProfile } from '../../../state/authSlice'

const UserDetail = () => {

    const {auth} = useAppSelector(store=> store);
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(fetchUserProfile())
    // })
      
    return (
        <div className='flex justify-center py-5 pt-2'>
            <div className='w-full lg:w-[70%]'>
                <div className='flex items-center pb-3 justify-between'>
                    <h1 className='text-2xl font-bold text-gray-600'>Personal Details</h1>
                </div>
                <div className='space-y-5'>
                    {
                        console.log(auth)
                    }
                    <ProfileFieldCard keys={'Name'} value={auth.user?.fullName} />
                    <Divider/>
                    <ProfileFieldCard keys={'Mobile'} value={auth.user?.mobile || ""} />
                    <Divider/>
                    {/* <ProfileFieldCard keys='Mobile' value={"9898767654"} /> */}
                    <ProfileFieldCard keys={'Email'} value={auth.user?.email} />
                </div>
            </div>
        </div>
    )
}

export default UserDetail
