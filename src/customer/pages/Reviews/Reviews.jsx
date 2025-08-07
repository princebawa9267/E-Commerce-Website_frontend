import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'

const Reviews = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20'>
      <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
      <img src='https://as1.ftcdn.net/v2/jpg/05/43/22/96/1000_F_543229600_4iFlwFap12lF7TCnqglUpKBoTzoiVyqc.jpg' alt='' />
      <div>
        <div>
        <h1 className='font-bold text-lg text-[var(--primary-color)]'>Ram Clothings</h1>
        <p className='text-black font-semibold'>Men Black T-shirt</p>
            <div className='price flex items-center gap-3'>
          <span className='font-sans text-gray-800'>
          ₹ 399
          </span>
          <span className='thin-line-through text-gray-400'>
          ₹ 999
          </span>
          <span className='text-[var(--primary-color)] font-bold'>
            60%
          </span>
        </div>
        </div>
      </div>
      </section>
      <section className='w-full'>
        {[1,1,1,1,1,1].map(()=>(<div className='space-y-4'><ReviewCard/><Divider/></div>))}
        
      </section>
    </div>
  )
}

export default Reviews
