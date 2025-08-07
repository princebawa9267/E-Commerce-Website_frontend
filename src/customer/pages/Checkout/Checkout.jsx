import { Box, Button, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddressCard from './AddressCard'
import AddressForm from './AddressForm';
import PricingCard from '../Cart/PricingCard';
import { RazorPay, Stripe } from '../../../assets/online images/onlineImage';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { fetchUserCart } from '../../../state/customer/cartSlice';
import { createOrder } from '../../../state/customer/orderSlice';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Checkout = () => {

    const [open, setOpen] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");

    const dispatch = useAppDispatch();

    const paymentGatewayList = [{ value: "RAZORPAY", img: RazorPay, label: "" }, { value: "STRIPE", img: Stripe, label: "" }]

    const handlePaymentChange = (event) => {
        setPaymentGateway(event.target.value);
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { auth } = useAppSelector(store => store);

    useEffect(() => {
        dispatch(fetchUserCart(localStorage.getItem("jwt") || ""))
        // dispatch(fetchUserAddresses(localStorage.getItem("jwt") || ""))
    }, [])

    const handleCheckOut = () => {
        if(selectedAddressId == null){
            toast.error("First select your address")
        }
        else{
            dispatch(createOrder({
              address: auth.user.addresses.find(addr => addr.id === selectedAddressId),
              jwt: localStorage.getItem("jwt") || "",
              paymentGateway : paymentGateway
            }));
        }
      };

    return (
        <div className='pt-10 px-5 sm:px-10 md:px-20 lg:px-40 min-h-screen justify-center'>
            <div className='space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-9'>
                {
                    console.log(auth)
                }
                <div className='col-span-2 space-y-5' >
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold'>Select Address</h1>
                        <Button variant='outlined' onClick={handleOpen}>Add new Address</Button>
                    </div>
                    <div className='text-xs font-medium space-y-5'>
                        <p>Saved Addresses</p>
                        <div className='space-y-4'>
                            {auth.user?.addresses.map((item) => <AddressCard key={item.id} item={item} selected={selectedAddressId === item.id}
                                onSelect={() => setSelectedAddressId(item.id)} />)}
                        </div>
                    </div>

                    <div className='m-4 py-4 px-5 rounded-md border'>
                        <Button onClick={handleOpen}>Add new Address</Button>
                    </div>
                </div>
                <div className='md:flex md:justify-center lg:block'>
                    <div className='p-3 border rounded-md col-span-1 md:w-[50%] lg:w-full'>
                        <div>
                            {/* <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label" className='flex justify-center'>Choose Payment Gateway</FormLabel> */}
                            <div className='flex flex-col items-center mt-4'>
                                <h1 className='text-[var(--primary-color)] font-semibold'>Choose Payment Gateway</h1>
                                <RadioGroup
                                    row
                                    aria-labelledby="Payment Mode"
                                    name="Payment Mode"
                                    className=''
                                    onChange={handlePaymentChange}
                                    value={paymentGateway}
                                >
                                    {
                                        paymentGatewayList.map((item) => (
                                            <FormControlLabel className='w-30 h-12 flex justify-center object-cover' value={item.value} control={<Radio />} label={<img className={` ${item.value == "STRIPE" ? "h-10" : ""} object-cover`} src={item.img} alt='' />} />
                                        ))
                                    }
                                </RadioGroup>
                            </div>
                            {/* </FormControl> */}
                        </div>
                        <PricingCard />
                        <div className='p-3'>
                            <Button
                                fullWidth
                                variant='contained'
                                sx={{ py: '11px' }}
                                onClick={handleCheckOut}
                            >
                                CHECKOUT
                            </Button>
                        </div>
                    </div>
                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='w-full'
            >
                <Box sx={style} >
                    <AddressForm paymentGateway={paymentGateway} />
                </Box>
            </Modal>

        </div>
    )
}

export default Checkout
