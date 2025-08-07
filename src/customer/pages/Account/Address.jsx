import React from 'react'
import UserAddressCard from './UserAddressCard';

const Address = () => {
  return (
    <div>
      <div className='space-y-4'>
        {[1,1,1,1,1,1,1].map((item) => <div> <UserAddressCard/> </div>)}
      </div>
    </div>
  )
}

export default Address;
