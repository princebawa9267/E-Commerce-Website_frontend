import React from 'react'
import { LaptopImg } from '../../../../assets/online images/onlineImage'

const ElectricCategoryCard = ({item}) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <img src={item.image} width={40}/>
        <h3>{item.text}</h3>
      </div>
    </>
  )
}

export default ElectricCategoryCard;
