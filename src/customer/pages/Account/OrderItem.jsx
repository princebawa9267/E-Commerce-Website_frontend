import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../../state/store'
import { fetchOrderById, fetchOrderItemById } from '../../../state/customer/orderSlice'

const OrderItem = ({item,order}) => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/account/order/${order.id}/${item.id}`)} className='text-sm p-5 space-y-5 border rounded-md cursor-pointer'>
      <div className='flex items-center gap-5'>
        <div>
          <Avatar sizes='small'>
            <ElectricBolt sx={{ color: 'var(--primary-color)' }} />
          </Avatar>
        </div>
        <div>
          <h1 className='font-bold text-[var(--primary-color)]'>
            {
              console.log("order ",order.orderStatus)
            }
            {console.log("item ",order.orderStatus)}
          </h1>
          <p>Arriving By {order.deliverDate}</p>
        </div>
      </div>

      <div className='bg-[#cce0f5] flex justify-center p-5 gap-3 items-center rounded-md'>
        <div className=''>
          <img className='w-[100px]' src={item.product.images[0]} alt='' />
        </div>
        <div>
          <h1 className='font-bold text-[var(--primary-color)]'>{item.product.seller?.businessDetails?.businessName}</h1>
          <p>{item.product.title}</p>
          {
            console.log("Item Product ",item.product)
          }
          <p><strong>Size : </strong> {item.product?.sizes}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
