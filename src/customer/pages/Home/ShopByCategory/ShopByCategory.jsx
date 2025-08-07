import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard';



const ShopByCategory = () => {

  const product = [
    { image : "https://ik.imagekit.io/2xkwa8s1i/consumer-react/More-Category/Dining-Furniture/Dining-set.jpg?tr=w-640" , name  :"Kitchen"},
    { image : "https://www.jockey.in/cdn/shop/products/AM01_NV-ST_0103_S223_JKY_2.webp?v=1700025291&width=720" , name  :"T-shirt"},
    { image : "https://www.hallensteins.com/content/products/ab-twill-baggy-cargo-pant-tan-front-10002879.jpg?width=2058" , name  :"Pants"},
    { image : "https://thaka.bing.com/th/id/OIP.lJlburfrPztjbyhXZbC-nQHaHa?rs=1&pid=ImgDetMain" , name  :"Vision Pro"},
    { image : "https://files.sophie.co.ke/2023/05/1955044573_8664-1_9826.jpg" , name  :"Watches"},
    { image : "https://i5.walmartimages.com/asr/db1c0af9-f692-489a-8cac-77b326c3a8ca.fd06c35fa92adcaec0824a865a3a67a6.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" , name  :"Keyboard & Mouse"},
    { image : "https://4.imimg.com/data4/KM/MJ/MY-16199830/cctv.jpg" , name  :"CCTV Camera"},
    { image : "https://thaka.bing.com/th/id/OIP.CiydXKhm4dnMx_4EvRojaAHaHa?rs=1&pid=ImgDetMain" , name  :"Laptop Backpack"},
    { image : "https://thaka.bing.com/th/id/OIP.wCf-rTe5L2pYw8WqoifBwgHaHa?rs=1&pid=ImgDetMain" , name  :"Shaker"},
  ]

  return (
    <div>
      <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of carefully curated categories to find exactly what you're looking for
          </p>
        </div>
    <div className='flex flex-wrap gap-3 items-center justify-center'>
      {
        product.map((product,index) => (
          <ShopByCategoryCard  key={index} {...product} />
        ))
      }
    </div>
    </div>
  )
}

export default ShopByCategory;
