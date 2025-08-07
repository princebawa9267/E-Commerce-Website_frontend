import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-[calc(100vh-40vh)]'>
            <HashLoader size={80} loading={true} />
        </div>
    )
}

export default Loader;
