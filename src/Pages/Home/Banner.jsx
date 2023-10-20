

const Banner = () => {
    return (
        <div>
             <div className="">
                 

                 <div  className="carousel w-full rounded-lg mt-10">
                   <div id="slide1" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
                     <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/NWXS50z/banner-on.jpg")'}}>
                       <div className="hero-overlay bg-black bg-opacity-50" />
                       <div className="hero-content text-center text-neutral-content">
                         <div className="max-w-md">
                           <h1 className="mb-5 text-3xl md:text-4xl font-bold text-white">
                             Touch Up
                           </h1>
                           <p className="mb-5 text-white lg:text-lg md:text-base text-xs font-medium">
                           Elevate Your Beauty Experience. <br /> Unveiling Timeless Elegance for the Glamour. <br />  Where Radiance Meets Innovation.
                           </p>
                 
                         <div className='mx-auto ml-10  md:ml-20 lg:ml-28'>
                         <button className="btn  btn-grad rounded border-none text-white">
                             Shop Now
                           </button>
                         </div>
                 
                         </div>
                       </div>
                     </div>
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                       <a href="#slide4" className="btn btn-circle">❮</a>
                       <a href="#slide2" className="btn btn-circle">❯</a>
                     </div>
                   </div>
                   <div id="slide2" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
                     <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/KWSkJn7/gg.jpg")'}}>
                       <div className="hero-overlay bg-black bg-opacity-60" />
                       <div className="hero-content text-center text-neutral-content">
                         <div className="max-w-md">
                           <h1 className="mb-5 text-4xl font-bold text-white">
                             Touch Up
                           </h1>
                           <p className="mb-5 text-white lg:text-lg md:text-base text-xs font-medium">
                           Elevate Your Beauty Experience. <br /> Unveiling Timeless Elegance for the Glamour. <br />  Where Radiance Meets Innovation.
                           </p>
                            <div className='mx-auto ml-10  md:ml-20 lg:ml-28'>
                         <button className="btn  btn-grad rounded border-none text-white">
                         Shop Now
                           </button>
                         </div>
                         </div>
                       </div>
                     </div>
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                       <a href="#slide1" className="btn btn-circle">❮</a>
                       <a href="#slide3" className="btn btn-circle">❯</a>
                     </div>
                   </div>
                   <div id="slide3" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
                     <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/f84yPKP/kk.jpg")'}}>
                       <div className="hero-overlay bg-black bg-opacity-60" />
                       <div className="hero-content text-center text-neutral-content">
                         <div className="max-w-md">
                           <h1 className="mb-5 text-4xl font-bold text-white">
                          Touch Up
                           </h1>
                           <p className="mb-5 lg:text-lg text-white md:text-base text-xs font-medium">
                           Elevate Your Beauty Experience. <br /> Unveiling Timeless Elegance for the Glamour. <br />  Where Radiance Meets Innovation.
                           </p>
                           <div className='mx-auto ml-10  md:ml-20 lg:ml-28'>
                         <button className="btn  btn-grad rounded border-none text-white">
                         Shop Now
                           </button>
                         </div>
                         </div>
                       </div>
                     </div>
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                       <a href="#slide2" className="btn btn-circle">❮</a>
                       <a href="#slide4" className="btn btn-circle">❯</a>
                     </div>
                   </div>
                   <div id="slide4" className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]">
                     <div className="hero w-full" style={{backgroundImage: 'url("https://i.ibb.co/V3rMwzk/ll.jpg")'}}>
                       <div className="hero-overlay bg-black bg-opacity-60" />
                       <div className="hero-content text-center text-neutral-content">
                         <div className="max-w-md">
                           <h1 className="mb-5 text-4xl font-bold text-white">
                          Touch Up
                           </h1>
                           <p className="mb-5 lg:text-lg  text-white md:text-base text-xs font-medium">
                           Elevate Your Beauty Experience. <br /> Unveiling Timeless Elegance for the Glamour. <br />  Where Radiance Meets Innovation.
                           </p>
                           <div className='mx-auto ml-10  md:ml-20 lg:ml-28'>
                         <button className="btn  btn-grad rounded border-none text-white">
                         Shop Now
                           </button>
                         </div>
                         </div>
                       </div>
                     </div>
                     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                       <a href="#slide3" className="btn btn-circle">❮</a>
                       <a href="#slide1" className="btn btn-circle">❯</a>
                     </div>
                   </div>
                 </div>
                 
                         </div>
        </div>
    );
};

export default Banner;