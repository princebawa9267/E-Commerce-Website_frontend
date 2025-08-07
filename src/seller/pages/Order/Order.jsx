import React from 'react'
import OrderTable from './OrderTable'

const Order = () => {
  return (
    <div>
        <h1 className='font-bold text-2xl mb-5 text-[var(--primary-color)]'>All orders</h1>
      <OrderTable/>
    </div>
  )
}

export default Order
