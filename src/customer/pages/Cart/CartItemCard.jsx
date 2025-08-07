import { Add, Close, Remove } from '@mui/icons-material';
import { Button, Divider, IconButton } from '@mui/material';
import React from 'react'
import { useAppDispatch } from '../../../state/store';
import { deleteCartItem, updateCartItem } from '../../../state/customer/cartSlice';

const CartItemCard = ({item}) => {

    const dispatch = useAppDispatch();

    const handleUpdateQuantity = (value) =>() => {
        dispatch(updateCartItem({jwt : localStorage.getItem("jwt"),
            cartItemId : item.id,
            cartItem : {quantity: item.quantity + value}
        }))}
    
    const handleRemoveCartItem = () => {
        dispatch(deleteCartItem({jwt : localStorage.getItem("jwt"),cartItemId : item.id }))
    }

    return (
        <div className='border rounded-md relative'>
            <div className='p-5 flex gap-3'>
                {
                    console.log("Item s",item)
                }
                <div>
                    <img className='w-[90px] h-[90px] object-cover' src={item.product.images[0]} alt='' />
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-lg text-[var(--primary-color)]'>{item.product.seller?.businessDetails?.businessName}</h1>
                    <p className='text-gray-700 font-medium'>{item.product.title}</p>
                    {/* <div className='flex'><strong>Sold by : </strong><pre className='text-gray-500'> Natural Lifestyle Products private limited</pre></div> */}
                    <p className='text-gray-500'><strong>Sold by : </strong>Natural Lifestyle Products private limited</p>
                    <p className='text-gray-500 text-sm'>7 days replacement available</p>
                    <p className='text-sm text-gray-500'><strong>Quantity : </strong>{item.quantity}</p>
                </div>
            </div>
                <Divider />
                <div className='flex justify-between'>
                <div className='px-5 py-2 flex justify-between items-center'>
                    <div className='flex items-center gap-2 w-[140px] justify-between'>
                            <div className='flex items-center gap-2 w-[140px] justify-between'>
                                <Button disabled={(item.quantity == 1) ? true : false} onClick={handleUpdateQuantity(-1)}>
                                    <Remove />
                                </Button>
                                <span>
                                    {item.quantity}
                                </span>
                                <Button onClick={handleUpdateQuantity(1)}>
                                    <Add />
                                </Button>
                            </div>
                    </div>
                </div>
                {
                    console.log(item)
                }
                <div className='flex items-center pr-5'>
                    <p>₹ {item.sellingPrice}</p>
                </div>
                </div>
                <div className='absolute top-1 right-1'>
                    <IconButton onClick={() => handleRemoveCartItem()}>
                        <Close color='primary'/>
                    </IconButton>
                </div>
        </div>
    )
}

export default CartItemCard;
