import React, { useEffect, useState } from 'react'
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import customTheme from './theme/customTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import PageDetail from './customer/pages/PageDetail/PageDetail';
import Reviews from './customer/pages/Reviews/Reviews';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/Pages/Dashboard/AdminDashboard';
import { useAppDispatch, useAppSelector } from './state/store';
import { fetchSellerProfile } from './state/seller/sellerSlice';
import Auth from './customer/pages/Auth/Auth';
import PaymentSuccess from './customer/pages/Payment Success/PaymentSucess';
import Wishlist from './customer/pages/Wishlist/Wishlist';
// import auth from './state/store/auth'

// CSS
import './App.css'
import { fetchUserProfile } from './state/authSlice';
import SellerNavbar from './seller/components/SellerNavbar';

const App = () => {

  const dispatch = useAppDispatch();
  const {seller,auth} = useAppSelector(store => store)
  const location = useLocation();

  useEffect(()=>{
    const jwt = localStorage.getItem("jwt");
    if(jwt){
      dispatch(fetchSellerProfile(jwt));
    }
  },[])

  useEffect(()=>{
    if(seller.profile != null && seller.profile != ""){
      console.log("I am here ",seller.isLoggedIn);
    }
  },[seller.profile])

  useEffect(() => {
    window.scrollTo({top : 0, behavior : "smooth"});
  },[location.pathname])

  useEffect(() => {
    dispatch(fetchUserProfile(auth.jwt || localStorage.getItem("jwt")))
  },[auth.jwt])

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <div className='bg-[#eef0f3] min-h-screen'>
          {
            console.log("Hello My dost ",seller)
          }
          {
            (!seller.isLoggedIn) ? <div className='pb-18'><Navbar/></div> : <SellerNavbar/>
          }
          <Routes>
            <Route path='*' element={<Home/>}/>
            <Route path='/login' element={<Auth/>} />
            <Route path='/products/:category' element={<Product/>}/>
            <Route path='/reviews/:productId' element={<Reviews/>}/>
            <Route path='/product-details/:categoryId/:name/:productId' element={<PageDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/payment-success/:orderId' element={<PaymentSuccess/>}/>
            <Route path='/account/*' element={<Account/>}/>
            <Route path='/become-seller' element={<BecomeSeller/>}/>
            <Route path='/seller/*' element={<SellerDashboard/>}/>
            <Route path='/admin/*' element={<AdminDashboard/>}/>
          </Routes>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
