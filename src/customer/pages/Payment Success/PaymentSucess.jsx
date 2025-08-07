import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';
import { paymentSuccess } from '../../../state/customer/orderSlice';

const PaymentSuccess = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {orderId} = useParams();
    const location = useLocation();
    const getQueryParams= (key) => {
        const query = new URLSearchParams(location.search)
        return query.get(key)
    }



    useEffect(() => {
        const paymentId = getQueryParams("razorpay_payment_id")
        const paymentLinkId = getQueryParams("razorpay_payment_link_id")
        dispatch(paymentSuccess({jwt : localStorage.getItem('jwt') || "",paymentId : paymentId || "",paymentLinkId : paymentLinkId || ""}))
    },[orderId])

  return (
    <div className='min-h-[90vh] flex justify-center items-center'>
      <div className='bg-[var(--primary-color)] text-white p-8 w-[90%] lg:w-[25%] border rounded-md h-[40vh] flex flex-col gap-7 items-center justify-center'>
        <h1 className='text-3xl font-semibold'>Congratulations !</h1>
        <h1 className='text-2xl font-semibold'>Your order get success</h1>

        <div>
            <Button color='secondary' variant='contained' onClick={(() => navigate("/"))}>
                Shop more
            </Button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess;
