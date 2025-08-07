import { AccountBox, Add, Category, Dashboard, Delete, ElectricBolt, Home, IntegrationInstructions, LocalOffer, Logout } from '@mui/icons-material'
import React from 'react'
import DrawerList from '../../component/DrawerList'

const AdminDrawerList = ({toggleDrawer}) => {

    const menu1 = [
        {
            name : "Dashboard",
            path : "/admin",
            icon : <Dashboard className='text-[var(--primary-color)]' />,
            activeIcon : <Dashboard className='text-white'/>
        },
        {
            name : "Coupons",
            path : "/admin/coupon",
            icon : <IntegrationInstructions className='text-[var(--primary-color)]' />,
            activeIcon : <IntegrationInstructions className='text-white'/>
        },
        {
            name : "Add Coupons",
            path : "/admin/add-coupon",
            icon : <Add className='text-[var(--primary-color)]' />,
            activeIcon : <Add className='text-white'/>
        },        {
            name : "Home Page",
            path : "/admin/home-grid",
            icon : <Home className='text-[var(--primary-color)]' />,
            activeIcon : <Home className='text-white'/>
        },
        {
            name : "Electronics Category",
            path : "/admin/electronics-category",
            icon : <ElectricBolt className='text-[var(--primary-color)]' />,
            activeIcon : <ElectricBolt className='text-white'/>
        },
        {
            name : "Shop By Category",
            path : "/admin/shop-by-category",
            icon : <Category className='text-[var(--primary-color)]' />,
            activeIcon : <Category className='text-white'/>
        },
        {
            name : "Deals",
            path : "/admin/deals",
            icon : <LocalOffer className='text-[var(--primary-color)]' />,
            activeIcon : <LocalOffer className='text-white'/>
        },
    ]

    const menu2 = [
        {
            name : "Account",
            path : "/seller/account",
            icon : <AccountBox className='text-[var(--primary-color)]' />,
            activeIcon : <AccountBox className='text-white'/>
        },
        {
            name : "Logout",
            path : "/",
            icon : <Logout className='text-[var(--primary-color)]' />,
            activeIcon : <Logout className='text-white'/>
        },
    ]

  return (
    <div>
      <DrawerList menu={menu1} menu2={menu2} toggleDrawer={toggleDrawer}/>
    </div>
  )
}

export default AdminDrawerList;
