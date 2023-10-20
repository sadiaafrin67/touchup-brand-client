
import PropTypes from 'prop-types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SingleBanner = ({ banner }) => {


  return (
    <div>
      <div  className="my-20">
        
          <Swiper 
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={50}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
           >
          {banner.map((banners) => (
          
             <SwiperSlide className='w-full h-full md:w-[100%] md:h-[620px]' key={banners.id}>
              <div  style={{backgroundImage: `url(${banners.brandImage})` , backgroundSize:"cover", height:"620px", width:"100%" }}>

<div>
<div className='text center flex flex-col justify-center items-center align-middle text-center content-center h-[50vh] pt-16 md:h-[40vh]'>
<h2 className='md:text-8xl text-3xl font-bold'>{banners.brandName}</h2>
<p className='md:text-4xl texl-lg font semibold text-black'>{banners.details}</p>
<p className='md:text-3xl texl-lg font semibold text-black'>{banners.more}</p>
<button className='btn-grad btn mx-auto'>Shop Now</button>
</div>

</div>
              </div>
             </SwiperSlide>
             
             
          
    
        
))}
 </Swiper>
          </div>
        </div>
    
    
  );
};

SingleBanner.propTypes = {
  banner: PropTypes.array
}
export default SingleBanner;
