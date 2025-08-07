import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import TransactionTable from './TransactionTable'

const Payment = () => {
  return (
    <div className=''>
      <Card className='rounded-md space-y-4 p-3 bg-[var(--primary-lighter)]'>
        <h1 className='text-gray-700 font-medium'>Total Earnings</h1>
        <h1 className='font-bold text-xl pb-1'>	₹ 0</h1>
        <Divider/>
        <p className='py-1'>Last Payment : <strong>₹0</strong> </p>
      </Card>
      <div className="my-5 space-y-3">
      <Button variant="contained">
        Transactions
      </Button>
        </div>
      <TransactionTable/>
    </div>
  )
}

export default Payment
