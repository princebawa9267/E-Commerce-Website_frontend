import React from 'react'
import { Route, Routes } from 'react-router'
import SellerTable from '../admin/Pages/Seller/SellerTable'
import Coupon from '../admin/Pages/Coupons/Coupon'
// import AddNewCouponForm from '../admin/Pages/Coupons/AddNewCouponForm'
import GridTable from '../admin/Pages/HomePage/GridTable'
import ElectronicTable from '../admin/Pages/HomePage/ElectronicTable'
import ShopByCategoryTable from '../admin/Pages/HomePage/ShopByCategoryTable'
import Deal from '../admin/Pages/HomePage/Deal'
import AddNewCouponForm from '../admin/Pages/Coupons/AddNewCouponForm'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SellerTable/>} />
        <Route path='/coupon' element={<Coupon/>} />
        <Route path='/add-coupon' element={<AddNewCouponForm/>} />
        <Route path='/home-grid' element={<GridTable/>} />
        <Route path='/electronics-category' element={<ElectronicTable/>} />
        <Route path='/shop-by-category' element={<ShopByCategoryTable/>} />
        {/* <Route path='/account' element={}/> */}
        <Route path='/deals' element={<Deal/>} />
      </Routes>
    </div>
  )
}

export default AdminRoutes
