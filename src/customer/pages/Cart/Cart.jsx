import React, { useEffect, useState } from 'react'
import { Close, LocalOffer } from '@mui/icons-material'
import { Button, IconButton, TextField } from '@mui/material'
import PricingCard from './PricingCard'
import { useNavigate } from 'react-router'
import { fetchUserCart } from '../../../state/customer/cartSlice'
import { useAppDispatch, useAppSelector } from '../../../state/store'
import CartItemCard from './CartItemCard'

// Loader
import { HashLoader } from 'react-spinners';
import Loader from '../../../component/Loader'

const Cart = () => {
    const [couponCode, setCouponCode] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCouponCode(e.target.value);
    }
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector(store => store)

    useEffect(() => {
        dispatch(fetchUserCart(localStorage.getItem("jwt") || ""))
    }, [])
    return (
        <div className='pt-10 px-5 sm:px-10 md:px-40 min-h-full'>
            {
                cart.loading ? <Loader /> : cart.cart?.cartItems.length == 0 ? <div className='message-div'><h1 className='message'>Your cart is empty</h1></div> :
                    <div>
                        {
                            cart.cart?.cartItems == null ? <div className='message-div'><h1 className='message'>Your cart is empty</h1></div> : <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                                <div className='cartItemSection lg:col-span-2 space-y-3'>
                                    {
                                        console.log(cart.cart?.cartItems)
                                    }
                                    {cart.cart?.cartItems.map((item) => <CartItemCard item={item} />)}
                                </div>
                                <div className='col-span-1 text-sm space-y-3'>
                                    <div className='border rounded-md px-5 py-3 space-y-5'>
                                        <div>
                                            <div className='flex gap-3 text-sm items-center'>
                                                <div className='flex gap-3 text-sm items-center'>
                                                    <LocalOffer sx={{ fontSize: '20px' }} className='text-[var(--primary-color)]' />
                                                </div>
                                                <span>Apply Coupons</span>
                                            </div>
                                            {
                                                true ?
                                                    <div className='m-4 flex justify-between items-center'>
                                                        <TextField onChange={handleChange} size='small' id="coupon" label="Enter Coupon" variant="outlined" />
                                                        <Button size="small" >
                                                            Apply
                                                        </Button>
                                                    </div> :
                                                    <div className='flex'>
                                                        <div className='mt-2 p-1 pl-5 pr-3 rounded-md flex gap-2 items-center '>
                                                            <span className='border p-2 rounded-md'>PRINCE30 Applied</span>
                                                            <IconButton size='small'>
                                                                <Close className='text-red-600' />
                                                            </IconButton>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='border rounded-md px-5 py-3 space-y-2'>
                                        <PricingCard />
                                        <div>
                                            <Button onClick={() => navigate("/checkout")} fullWidth sx={{ py: "11px" }} variant='contained'>
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>


            }
        </div>
    )
}

export default Cart
