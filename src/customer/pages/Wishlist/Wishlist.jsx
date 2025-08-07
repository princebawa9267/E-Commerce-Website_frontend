import React, { useEffect } from 'react'
import WishlistProductCard from './WishlistProductCard'
import { getWishlistByUserId } from '../../../state/customer/wishlistSlice';
import { useAppDispatch, useAppSelector } from '../../../state/store';

const Wishlist = () => {

  const dispatch = useAppDispatch();
  const {wishlist} = useAppSelector(store => store);

  useEffect(()=> {
    dispatch(getWishlistByUserId())
  },[])

  return (
    <div className='min-h-screen h-[85vh] p-5 lg:p-20 '>
      {
        (wishlist?.wishlist?.products && wishlist.wishlist?.products?.length != 0 ) ? <section>
        <h1><strong>My Wishlist </strong>{wishlist.wishlist?.products?.length} items </h1>
        <div className='pt-10 flex flex-wrap gap-5'>
            {wishlist.wishlist?.products?.map((item) => <WishlistProductCard item={item}/>)}
        </div>
      </section> : <div className='message-div'><h1 className='message'>Your wishlist is empty</h1></div>
      }
    </div>
  )
}

export default Wishlist;
