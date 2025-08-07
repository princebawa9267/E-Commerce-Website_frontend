import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Button, CircularProgress, Divider } from '@mui/material';
import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Reviews/ReviewCard';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import { useParams } from 'react-router';
import { fetchProductById } from '../../../state/customer/productSlice';
import { addProductToWishlist } from '../../../state/customer/wishlistSlice';
import { addItemToCart } from '../../../state/customer/cartSlice';

const PageDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const dispatch = useAppDispatch()
    const {productId} = useParams()
    const {product,loading} = useAppSelector(store=>store)

    useEffect(() => {
        dispatch(fetchProductById(Number(productId)))
    },[productId])

    const handleActiveImage = (value) => () => {
        setActiveImage(value);
    }
    const handleAddToBag = () => {
        console.log(product.product)
        const cartItem = {
            productId: product.product.id,
            quantity: quantity,  // default to 1 on add
            size: product.product.sizes,  // assuming this is chosen already
        };
        dispatch(addItemToCart({jwt : localStorage.getItem("jwt") ,request : cartItem }))
    }
    const handleAddToWishlist = () => {
         dispatch(addProductToWishlist({productId : productId}))
    }

    return (
        <div className='px-5 lg:px-20 pt-10'>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <section className='flex flex-col lg:flex-row gap-5'>
                    <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
                        {
                            console.log(product)
                        }
                        {
                            product.product?.images?.map((item,index) => <img key={index} onClick={handleActiveImage(index)} className=' w-[50px] lg:w-[full] cursor-pointer rounded-md' src={item} alt='' />)
                        }
                        {/* <img src='' /> */}
                    </div>
                    <div className='w-full lg:w-[85%]'>
                        {
                            loading ? <CircularProgress/> : <img className='w-full rounded-md' src={product.product?.images?.[activeImage]} />
                        }
                    </div>
                </section>
                <section>
                    <h1 className='font-bold text-lg text-[var(--primary-color)]'>{product.product?.seller?.businessDetails?.businessName}</h1>
                    <p className='text-black font-semibold'>{product.product?.title}</p>
                    <div className='flex justify-between items-center py-2 border w-[180px] px-3 mt-5'>
                        <div className='flex gap-1 items-center'>
                            <span>
                                4
                            </span>
                            <StarIcon className='text-[var(--primary-color)]' sx={{ fontSize: "17px" }} />
                            <Divider orientation="vertical" flexItem />
                            <span>455 Ratings</span>
                        </div>
                    </div>
                    <div>

                        <div className='price flex items-center gap-3 mt-5 text-2xl'>
                            <span className='font-sans text-gray-800'>
                                ₹ {loading ? "loading..." : product.product?.sellingPrice}
                            </span>
                            <span className='thin-line-through text-gray-400'>
                                ₹ {loading ? "loading..." : product.product?.mrpPrice}
                            </span>
                            <span className='text-[var(--primary-color)] font-bold'>
                               {loading ? "loading..." : product.product?.discountPercent}%
                            </span>
                        </div>
                        <p>Inclusive all taxes. Free Shipping above ₹1500</p>

                        <div className='mt-7 space-y-3'>
                            <div className='flex items-center gap-4'>
                                <Shield className='text-[var(--primary-color)]' sx={{ fontSize: "17px" }} />
                                <p>Authentic and Quality Assured</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <WorkspacePremium className='text-[var(--primary-color)]' sx={{ fontSize: "17px" }} />
                                <p>100% money back gurantee</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <LocalShipping className='text-[var(--primary-color)]' sx={{ fontSize: "17px" }} />
                                <p>Free Shipping and Returns</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <Wallet className='text-[var(--primary-color)]' sx={{ fontSize: "17px" }} />
                                <p>Pay on delivery might be available</p>
                            </div>
                        </div>

                        <div className='mt-7 space-y-2'>
                            <h1>
                                QUANTITY
                            </h1>
                            <div className='flex items-center gap-2 w-[140px] justify-between'>
                                <Button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>
                                    <Remove />
                                </Button>
                                <span>
                                    {quantity}
                                </span>
                                <Button onClick={() => setQuantity(quantity + 1)}>
                                    <Add />
                                </Button>
                            </div>
                        </div>

                        <div className='mt-2 flex items-center gap-5'>
                            <Button fullWidth variant='contained' onClick={() => handleAddToBag()} startIcon={<AddShoppingCart />} sx={{ py: "1rem" }}>
                                Add to Cart
                            </Button>
                            <Button fullWidth variant='outlined' onClick={() => handleAddToWishlist()} startIcon={<FavoriteBorder />} sx={{ py: "1rem" }}>
                                Wishlist
                            </Button>
                        </div>

                        <div className='mt-4'>
                            {loading ? "loading..." : product.product?.description}
                        </div>

                        <div className='mt-7'>
                            {/* <ReviewCard/> */}
                            <Divider/>
                        </div>
                    </div>


                </section>
            </div>

            

            <div className='mt-20'>
                <h1 className='text-lg font-bold'>Similar Products</h1>
                <div className='pt-5'>
                <SimilarProduct />
                </div>
            </div>

        </div>
    )
}

export default PageDetail
