import { Divider } from '@mui/material';
import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import Order from './Order';
import OrderDetail from './OrderDetail';
import UserDetail from './UserDetail';
import Address from './Address';
import { useAppDispatch } from '../../../state/store';
import { logout } from '../../../state/authSlice';

const Account = () => {

  const menu = [
    {name : "Orders", path : "/account/orders"},
    {name : "Profile" , path : "/account"},
    {name : "Saved cards", path : "/account/saved-card"},
    {name : "Address", path : "/account/addresses"},
    {name : "Logout", path : "/"}
  ]

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleClick = (item) => {
    if(item.path === "/"){
      dispatch(logout(navigate))
    }
    navigate(item.path)
  };

  return (
    <div className='px-5 lg:px-40 min-h-screen mt-10'>
      <div>
        <h1 className='text-xl font-bold pb-5'>Prince</h1>
      </div>
      <Divider/>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]'>
        <section className='col-span-1 lg:border-r lg:pr-5 py-5 h-full'>
          {menu.map((item)=>(
            <div onClick={() =>handleClick(item)} key={item.name} className={` ${item.path === location.pathname?"bg-[var(--primary-color)] text-white":""} border-b my-4  rounded-md pl-3 py-3 cursor-pointer hover:text-white hover:bg-[var(--primary-light)]`}>
              <p>{item.name}</p>
            </div>
          ))}
        </section>
        <section className='m-5 ml-5 col-span-2 right'>
          <Routes>
            <Route path='/' element={<UserDetail/>}/>
            <Route path='/orders' element={<Order/>}/>
            <Route path='/order/:orderId/:orderItemId' element={<OrderDetail/>}/>
            <Route path='/addresses' element={<Address/>}/>
          </Routes>
        </section>
      </div>
    </div>
  )
}

export default Account;
