import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../seller/pages/SellerDashboard/Dashboard'
import Products from '../seller/pages/Product/Products'
import AddProduct from '../seller/pages/Product/AddProduct'
import Order from '../seller/pages/Order/Order'
import Profile from '../seller/pages/Account/Profile'
import Payment from '../seller/pages/Payment/Payment'
import TransactionTable from '../seller/pages/Payment/TransactionTable'

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/account' element={<Profile/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/transaction' element={<TransactionTable/>}/>
      </Routes>
    </div>
  )
}

export default SellerRoutes
