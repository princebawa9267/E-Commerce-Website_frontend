import { Radio } from '@mui/material'
import React, { useState } from 'react'

const AddressCard = ({item,selected, onSelect}) => {

    const handleChangeState = (event) => {
        setIsChecked(!isChecked)
        console.log(event.target.checked);
    }

    return (
        <div>
            <div className='m-4 p-5 flex border rounded-md'>
                <div>
                    <Radio checked={selected}
                        onChange={onSelect}
                        value={item.id}
                        name='address-radio'
                    />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.address}</p>
                    <p><strong>Mobile : </strong>{item.mobile}</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard
