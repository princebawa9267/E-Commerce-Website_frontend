import React from 'react'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import {Button} from '@mui/material';
import {Storefront } from '@mui/icons-material';
import { useNavigate } from 'react-router'

import {Banner} from '../../../assets/HomePage/index'


const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <ElectricCategory/>
        <CategoryGrid/>
        <Deal />
        <section>
          <ShopByCategory />
        </section>
        <section className='mt-9'>
          <div className='relative h-[50vh] lg:h-[90vh] p-4'>
            <img src={Banner} className='w-full h-full object-cover object-top'/>
            <div className='absolute text-white top-1/7 left-4 lg:left-[10rem] transform translate-y-1/2 lg:text-4xl space-y-3 font-[Oswald]'>

            <h1>Sell your Product</h1>
            <p>With</p>
            <h1 className='asset-font font-bold'>PRIME GOODS</h1>
            <Button onClick={() => navigate("/become-seller")} variant='contained' startIcon={<Storefront />}>
                Become Merchant
              </Button>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
