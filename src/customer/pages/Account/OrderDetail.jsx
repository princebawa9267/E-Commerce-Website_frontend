import { Box, Button, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import OrderStepper from './OrderStepper';
import { Payments } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { fetchOrderById, fetchOrderItemById, fetchUserOrderHistory } from '../../../state/customer/orderSlice';
//import PaymentsIcon from '@mui/icons-material/Payments'

const OrderDetail = () => {

    const [matchedItem, setMatchedItem] = useState([]);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
      const {orderId,orderItemId} = useParams();
      const { order} = useAppSelector(store => store);
    
      useEffect(() => {
        dispatch(fetchOrderById({orderId : Number(orderId),jwt:localStorage.getItem("jwt") || ""}))
        dispatch(fetchOrderItemById({orderItemId : Number(orderItemId), jwt : localStorage.getItem("jwt") || ""}))
        dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""))
        setMatchedItem(order.orders.find(item => item.id === orderId));
      },[])

    return (
        <div>
            {
                // console.log(order.orders.map(item => item.id))
                // matchedItem = order.orders.find(item => item.id === orderId);
                // console.log("I amm " ,matchedItem)
                // console.log("Hello" ,order.orders)
                console.log("Mera ",(order.orders.find(item => String(item.id) === String(orderId))).orderStatus)
                // console.log("Hello ",order.orders.find(item => item.id === orderId))
            }
            <Box className="space-y-5">
                <section className='flex flex-col gap-5 justify-center items-center'>
                    <img className='w-[100px]' src={order.orderItem?.product.images[0]} alt='' />
                    <div className='text-sm space-y-1 text-center'>
                        {/* <h1>{orders.orderItem?.product.seller?.businessDetail.}</h1> */}
                        <h1 className='font-bold'>{order.orderItem?.product.seller?.businessDetail?.businessDetail}</h1>
                        <p>{order.orderItem?.product.title}</p>
                        <p><strong>Size : </strong> {order?.orderItem?.size}</p>
                    </div>
                    <div>
                        <Button onClick={() => navigate(`/reviews/${5}/create`)}>
                            Write Review
                        </Button>
                    </div>
                </section>

                {
                    console.log("Order : ",order)
                }

                <section className='border rounded-md p-5'>
                <OrderStepper orderStatus={order.orders.find(item => String(item.id) === String(orderId))?.orderStatus} />
                </section>

                <div>
                    <h1>Delivery Address</h1>
                    <div className='text-sm space-y-2'>
                        <div className='flex gap-5 font-medium'>
                            <p>{order.currentOrder?.shipphingAddress?.name}</p>
                            <Divider />
                            <p>{order.currentOrder?.shipphingAddress?.mobile}</p>
                        </div>
                        <p>
                            {order.currentOrder?.shipphingAddress?.address}, {" "}
                            {order.currentOrder?.shipphingAddress?.state}, {" "}
                            {order.currentOrder?.shipphingAddress?.city}, {" "}
                            {order.currentOrder?.shipphingAddress?.pinCode}
                        </p>
                    </div>
                </div>

                <div className='border rounded-md space-y-4'>
                    <div className='flex justify-between text-sm pt-5 px-5'>
                        <div className='space-y-1'>
                            <p className='font-bold'>Total Item Price</p>
                            <p>You saved <span className='text-green-500 font-medium text-xs'>₹ 699.00</span> on this item</p>
                        </div>
                        <p className='font-medium'>₹ {order.orderItem?.sellingPrice}.00</p>
                    </div>
                        <div className='px-5'>
                            <div className='bg-[var(--primary-lighter)] px-5 py-2 text-xs font-medium flex items-center gap-3'>
                                <Payments />
                                <p>Pay on Delivery</p>
                            </div>
                        </div>

                    <Divider />

                    <div className='px-5 pb-5'>
                        {console.log(order.orderItem?.product.seller?.businessDetails)}
                        <p className='text-xs'>Sold by : <strong>{order.orderItem?.product.seller?.businessDetail?.businessName}</strong></p>
                    </div>

                    <div className='p-5'>
                        <Button
                            disabled={false}
                            variant="outlined"
                            color='error'
                            fullWidth
                            sx={{
                                py: "0.7rem",
                                // backgroundColor: "#f5f5f5",
                                // color: "#9e9e9e",
                                // borderColor: "#cccccc",
                                // opacity: 1, // keep it clearly visible
                                '&.Mui-disabled': {
                                  backgroundColor: "#f5f5f5",
                                  color: "#9e9e9e",
                                  borderColor: "#cccccc",
                                  opacity: 1,
                                }
                            }}
                        >
                            {true ? "Order Canceller" : "Cancel Order"}
                        </Button>

                    </div>
                </div>

            </Box>
        </div>
    )
}

export default OrderDetail
