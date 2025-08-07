import React, { useEffect, useState } from 'react'

import { Box, Divider, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { FilterAlt, Search } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import FilterSection from './FilterSection'
import ProductCard from './ProductCard';
import { fetchAllProducts, searchProduct, sortProductsByPrice } from '../../../state/customer/productSlice';
import { useParams, useSearchParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../state/store';
import Loader from '../../../component/Loader';

const Product = () => {

  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [filterDrawer, setFilterDrawer] = useState(false);

  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const product = useAppSelector(store => store.product);
  const { category } = useParams();

  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  // const handleSortChange = (event) => {
  // setSort(event.target.value);
  // console.log(event.target.value);
  // setSortedData([...product.products].sort((a,b) => {
  //   console.log(sort === "desc")
  //   return sort === "desc"
  //     ? a.sellingPrice - b.sellingPrice
  //     : b.sellingPrice - a.sellingPrice
  // })) 
  // dispatch(sortProductsByPrice(event.target.value))
  // }

  const handleSortChange = (event) => {
    setSort(event.target.value);
  }

  const handlePageChange = (value) => {
    console.log(value);
    setPage(value);
  }

  useEffect(() => {

    const price = searchParams.get("price");
    let minPrice = null;
    let maxPrice = null;

    if (price?.includes("-")) {
      [minPrice, maxPrice] = price.split("-");
    } else if (price) {
      minPrice = 1;
      maxPrice = price;
    }


    // const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
    const color = searchParams.get("color");
    const minDiscount = searchParams.get("discount") ? Number(searchParams.get("discount")) : undefined;
    const pageNumber = page - 1;

    const newFilter = {
      category: category,
      color: color || "",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      sort: sort,
      pageNumber: pageNumber,
      minDiscount,
    }
    dispatch(fetchAllProducts(newFilter))
  }, [category, searchParams, page, sort])

  return (
    <div className='-z-10 mt-10'>
      {
        
        (product.products.length == 0 && searchParams.size == 0) ? ((product.loading && product.products.length == 0) ? <Loader/> : <div className='message-div p-5'><h1 className='message'>Yet not product exists with this category</h1></div>) :
          <div>
            <h1 className='text-3xl text-center font-extrabold text-[var(--primary-color)] pb-5 px-9 uppercase space-x-2'>
            </h1>
            <div className='lg:flex'>
              <section className='filter_section hidden lg:block w-[25%]'>
                <FilterSection />
              </section>
              <div className='w-full lg:w-[80%] space-y-5'>
                <div className='flex justify-between pr-4'>
                  <div className="relative w-[50%]">
                    {
                      !isLarge && (<IconButton onClick={() => setFilterDrawer(!filterDrawer)}><FilterAlt /></IconButton>)
                    }
                    {
                      !isLarge && filterDrawer && (<Box><FilterSection /></Box>)
                    }
                  </div>
                  <FormControl size='small' sx={{ width: "200px" }}>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sort}
                      label="sort"
                      onChange={handleSortChange}
                    >
                      <MenuItem value="price_low">Price : Low - High</MenuItem>
                      <MenuItem value="price_high">Price : High - low</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Divider />
                {(product.products.length > 0) ? <section className='products_section grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center'>
                  {
                    Array.isArray(product.products) && product.products.map((items) => <ProductCard item={items} />)
                  }
                </section> : <div className='message-div'><h1 className='message'>No item exist with this filter</h1></div>}

                  {
                    console.log("Total Pages : ", product)
                  }

                {/* Pagination */}
                <div className='flex justify-center pt-4 pb-10'>
                  <Stack spacing={2} >
                    <Pagination
                      count={product.totalPages}
                      page={page}
                      onChange={(event,value) => {
                        console.log("Page Selected ",value);
                        setPage(value);
                      }}
                      renderItem={(item) => (
                        <PaginationItem
                          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                          {...item}
                        />
                      )}
                    />
                  </Stack>
                </div>
              </div>
            </div>

          </div>
      }

    </div>
  )
}

export default Product;
