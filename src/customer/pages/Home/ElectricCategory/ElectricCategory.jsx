import React from 'react'
import ElectricCategoryCard from './ElectricCategoryCard'
import tShirt from "../../../../assets/HomePage/Electric Category/b.avif"
import pants from "../../../../assets/HomePage/Electric Category/c.avif"
import tv from "../../../../assets/HomePage/Electric Category/d.avif"
import mobile from "../../../../assets/HomePage/Electric Category/e.avif"
import furniture from "../../../../assets/HomePage/Electric Category/f.jpg"
import { LaptopImg } from '../../../../assets/online images/onlineImage'


const items = [
  {
    image: tShirt,
    text: "T-shirt"
  },
  {
    image: pants,
    text: "Pants"
  },
  {
    image: tv,
    text: "TV"
  },
  {
    image: mobile,
    text: "Mobile"
  },
  {
    image: LaptopImg,
    text: "Laptop"
  },
  {
    image: furniture,
    text: "Furniture"
  },
];


const ElectricCategory = () => {
  return (
    <>
      <div className='flex flex-wrap justify-around items-center py-7'>
           { items.map((item,index) => <ElectricCategoryCard key={index} item={item}/>)}
      </div>
    </>
  )
}

export default ElectricCategory;
