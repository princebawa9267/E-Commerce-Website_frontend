import React from 'react'
import DealCart from './DealCart'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Autoplay, Navigation  } from 'swiper/modules';

const Deal = () => {

  const products = [
    { image: "https://rukminim2.flixcart.com/image/400/400/xif0q/smartwatch/m/v/i/-original-imah76cazsbbt8hu.jpeg?q=50", name: "Smart Watch", price: "1,999", discount: 20 },
    { image: "https://images-na.ssl-images-amazon.com/images/I/71gtHnQGfQL._AC_SL1500_.jpg", name: "Wireless Earbuds", price: "999", discount: 15 },
    { image: "https://www.bfgcdn.com/1500_1500_90/023-0049/salomon-speedcross-3-gtx-trail-running-shoes.jpg", name: "Running Shoes", price: "1,499", discount: 25 },
    { image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6504/6504985_sd.jpg", name: "IPhone", price: "75,999", discount: 20 },
    { image: "https://thaka.bing.com/th/id/OIP.RanOqWR4nsQcol-Ts0hwxgHaHa?rs=1&pid=ImgDetMain", name: "PS5 Slim Console", price: "79,999", discount: 15 },
  ];

  return (
    <div>

      <div className="bg-[#357ABD] text-white p-4 rounded-lg shadow-lg text-center m-4">
        <h2 className="text-2xl font-bold">🔥 Special Offer!</h2>
        <p className="text-lg">
          Get upto <span className="text-yellow-300 font-extrabold">50% OFF</span> on some items
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        <Swiper
          // slidesPerView={4.7}
          modules={[FreeMode, Pagination,Autoplay,Navigation]}
          spaceBetween={5}
          grabCursor={true}
          loop={true}
          freeMode={{
            enabled: true,
            sticky: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}

          navigation={true}

          breakpoints={{
            320: { slidesPerView: 1.2 },
            540: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
          }}

          // breakpoints={{
          //   320: { slidesPerView: 2 }, // For small screens, show 1 slide
          //   540:{slidesPerView : 1.9},
          //   640: { slidesPerView: 2 }, // For tablets, show 2 slides
          //   795 : {slidesPerView : 3},
          //   1024: { slidesPerView: 4 }, // For medium screens, show 3 slides
            // 1280: { slidesPerView: 4.7 } // For large screens, show 4.7 slides
          // }}
          
          className="mySwiper">



        {products.map((product, index) => (
          <SwiperSlide><DealCart key={index} {...product} /></SwiperSlide>
        ))}
        </Swiper>
      </div>

    </div>
  )
}

export default Deal
