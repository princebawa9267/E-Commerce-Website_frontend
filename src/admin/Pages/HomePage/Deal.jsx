import { Button } from '@mui/material'
import React, { useState } from 'react'
import DealCategoryTable from './DealCategoryTable'
import CreateDealForm from './CreateDealForm'
import DealTable from './DealTable'

const tabs = [
  "Deals",
  "Category",
  "Create Deal"
]

const Deal = () => {

  const [activeTab, setActiveTab] = useState("Deals")

  return (
    <div>
      <div className='flex gap-4'>
        {
          tabs.map((item,index) => <Button key={index} onClick={() => setActiveTab(item)} variant={activeTab == item ? "contained" : "outlined"}>{item}</Button>)
        }
      </div>
      <div className='mt-5'>
        {activeTab == "Deals"?<DealTable/>:activeTab == "Category"?<DealCategoryTable/> : <div className='flex flex-row justify-center items-center'><div className='mt-5 flex flex-col justify-center h-[50vh] w-[100%] lg:w-[30vw]'><CreateDealForm/></div></div> }
      </div>
    </div>
  )
}

export default Deal
