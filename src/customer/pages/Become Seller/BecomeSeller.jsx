import React, { useState } from 'react'
import {Button } from '@mui/material';
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { BecomeSellerImg } from '../../../assets/BecomeSeller/index.js';

const BecomeSeller = () => {

    const [isLogin,setIsLogin] = useState(false);

    const handleShowPage = () => {
        setIsLogin(!isLogin);
    }

  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
        <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md'>
            {isLogin?<SellerAccountForm/>:<SellerLoginForm />}
            <div className='mt-10 space-y-2'>
                <h1 className='text-center text-sm font-medium'>{!isLogin?"Don't have ":"Have "}account ?</h1>
                <Button onClick={handleShowPage} fullWidth sx={{py:"11px"}} variant='outlined'>
                    {!isLogin?"Register":"Login"}
                </Button>
            </div>
        </section>
        <section className='hidden lg:col-span-2 md:flex justify-center items-center'>
            <div className='lg:w-[70%] px-5 space-y-10'>
                <div className='flex flex-col space-y-2 font-bold text-center'>
                    <p className='text-2xl'>Join the Marketplace Revolution</p>
                    <p className='text-[var(--primary-color)]'>Boost your sales today</p>
                    <div className='h-80'>
                    <img className='w-full h-full object-contain' src={BecomeSellerImg} alt='Become Seller'/>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default BecomeSeller;
