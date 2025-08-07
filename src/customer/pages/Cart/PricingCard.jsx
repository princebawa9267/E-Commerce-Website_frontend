import { Divider } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../../state/store'

const PricingCard = () => {

  const { cart } = useAppSelector(store => store)
  const shippingFee = (cart.cart?.totalSellingPrice > 1500 ? 0 : 99)
  const discount = 0;


  return (
    <div>
      <div className='space-y-3 p-2'>
        <div className='flex justify-between items-center'>
          <p>Subtotal</p>
          <p>₹ {cart.cart?.totalSellingPrice}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p>Discount</p>
          <p>₹ {discount}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p>Shipping</p>
          <p>₹ {shippingFee}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p>Platform fee</p>
          <p className='text-emerald-700'>Free</p>
        </div>
        <Divider />
        <div className='font-bold mt-2 flex justify-between items-center'>
          <p>Total</p>
          <p>₹ {cart.cart?.totalSellingPrice + shippingFee}</p>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
