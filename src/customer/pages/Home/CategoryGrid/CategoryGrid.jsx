import React from 'react'

const CategoryGrid = () => {
  return (
    <div className="grid gap-3 grid-rows-12 grid-cols-12 lg:h-[65vh] px-5 lg:px-20">
  {/* Large Image - 3 Columns, Full Height */}
  <div className="col-span-3 row-span-12">
    <img src="https://th.bing.com/th/id/OIP.erOnXfVur0adgOKfqgVw2wAAAA?rs=1&pid=ImgDetMain" 
         className="w-full h-full object-cover object-top rounded-lg" 
         alt="Saree Image"/>
  </div>

  {/* Medium Image - 4 Columns, 7 Rows */}
  <div className="col-span-4 row-span-7">
    <img src="https://i.ebayimg.com/images/g/eTQAAOSwGMpmfaXf/s-l1600.webp" 
         className="w-full h-full object-cover object-center rounded-lg"/>
  </div>

  {/* Small Image 1 - 2 Columns, 4 Rows */}
  <div className="col-span-2 row-span-7">
    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/belt/w/d/9/one-size-mdl-htp-2-bl-sty-htp-2-bl-belt-provogue-original-imah4t3ugbmhjsjg.jpeg?q=70" 
         className="w-full h-full object-cover rounded-lg"/>
  </div>

  {/* Tall Image - 2 Columns, 7 Rows */}
  <div className="col-span-3 row-span-12">
    <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D" 
         className="w-full h-full object-cover rounded-lg"/>
  </div>

    {/* Small Image 2 - 2 Columns, 4 Rows */}
    <div className="col-span-3 row-span-5">
    <img src="https://cdn.pixabay.com/photo/2018/10/24/10/39/watch-3769945_1280.jpg" 
         className="w-full h-full object-cover rounded-lg"/>
  </div>

  {/* Small Image 2 - 2 Columns, 4 Rows */}
  <div className="col-span-3 row-span-5">
    <img src="https://highonleather.com/cdn/shop/products/20180825-HR0A2530_932x621.JPG?v=1618282304" 
         className="w-full h-full object-contain rounded-lg"/>
  </div>
</div>

  )
}

export default CategoryGrid;
