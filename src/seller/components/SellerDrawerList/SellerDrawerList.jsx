import { AccountBalanceWallet, AccountBox, Add, Dashboard, Inventory, Logout, Receipt, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import DrawerList from '../../../component/DrawerList';

const menu = [
    {
        name : "Dashboard",
        path : "/seller",
        icon : <Dashboard className='text-[var(--primary-color)]'/>,
        activeIcon : <Dashboard className='text-white'/>
    },
    {
        name : "Orders",
        path : "/seller/orders",
        icon : <ShoppingBag className='text-[var(--primary-color)]'/>,
        activeIcon : <ShoppingBag className='text-white'/>
    },
    {
        name : "Products",
        path : "/seller/products",
        icon : <Inventory className='text-[var(--primary-color)]'/>,
        activeIcon : <Inventory className='text-white'/>
    },
    {
        name : "Add product",
        path : "/seller/add-product",
        icon : <Add className='text-[var(--primary-color)]'/>,
        activeIcon : <Add className='text-white'/>
    },
    {
        name : "Payment",
        path : "/seller/payment",
        icon : <AccountBalanceWallet className='text-[var(--primary-color)]'/>,
        activeIcon : <AccountBalanceWallet className='text-white'/>
    },
    {
        name : "Transaction",
        path : "/seller/transaction",
        icon : <Receipt className='text-[var(--primary-color)]'/>,
        activeIcon : <Receipt className='text-white'/>
    },
    // {
    //     name : "Dashboard",
    //     path : "/seller",
    //     icon : <Dashboard className='text-[var(--primary-color)]'/>,
    //     activeIcon : <Dashboard className='text-white'/>
    // }
];

const menu2 = [
    {
        name : "Account",
        path : "/seller/account",
        icon : <AccountBox className='text-[var(--primary-color)]'/>,
        activeIcon : <AccountBox className='text-white'/>
    },
    {
        name : "Logout",
        path : "/",
        icon : <Logout className='text-[var(--primary-color)]'/>,
        activeIcon : <Logout className='text-white'/>
    }
]

const SellerDrawerList = ({toggleDrawer}) => {
  return (
      <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
  )
}

export default SellerDrawerList
