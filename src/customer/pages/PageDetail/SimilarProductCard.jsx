import React from 'react'
import { useNavigate } from 'react-router'

const SimilarProductCard = ({item}) => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='group pt-5 relative overflow-hidden'>
        <div className='relative w-[190px] h-[200px] overflow-hidden' onClick={() => navigate(`/product-details/${item.category?.categoryId}/${item.title}/${item.id}`)}>
            <img className='card-media object-contain' src={item.images[0]} alt="" />
        </div>


        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
        <div className='name' >
          <h1>{item.category?.name}</h1>
          <p>{item.title}</p>
        </div>
        <div className='price flex items-center gap-3'>
          <span className='font-sans text-gray-800'>
          ₹ {item.sellingPrice}
          </span>
          <span className='thin-line-through text-gray-400'>
          ₹ {item.mrpPrice}
          </span>
          <span className='text-[var(--primary-color)] font-bold'>
            {item.discountPercent}%
          </span>
        </div>

      </div>

      </div>
    </div>
  )
}

export default SimilarProductCard
