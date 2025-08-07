import React, { useEffect } from 'react'
import SimilarProductCard from './SimilarProductCard'
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { useParams, useSearchParams } from 'react-router';
import { fetchAllProducts } from '../../../state/customer/productSlice';

const SimilarProduct = () => {
    const dispatch = useAppDispatch();
    const product = useAppSelector(store => store.product);

    const [searchParams, setSearchParams] = useSearchParams();
    const { categoryId,productId } = useParams();

    useEffect(() => {
      const filter = {
        category : categoryId
      }
      console.log("My Filter ",filter)
      dispatch(fetchAllProducts(filter))
    },[categoryId])

  return (
    <div className='w-fit mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-between gap-4 gap-y-8'>
      {
        console.log("Hello ",product.products)
      }
      {Array.isArray(product.products) &&
      product.products.map((items) => (items.id != productId &&<SimilarProductCard item={items}/>))}
    </div>
  )
}

export default SimilarProduct;
