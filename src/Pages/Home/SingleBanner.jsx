import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const SingleBanner = ({ banner }) => {

  const number = banner.length;
  
  const [slide, setSlide] = useState(number)
  const [slideTwo, setSlideTwo] = useState(0)



console.log(number)
console.log(slide)


  const handleSliderOne = () => {
    setSlide(number-2)
    
  }

  const handleSliderTwo = () => {
    setSlideTwo(number+1)
    setSlide(number-1)
  }

  let count = 0;

  return (
    <div>
      <div  className="">
          <div className="carousel w-full rounded-lg mt-10">
          {banner.map((banners) => (
            <div key={banners.id}
              id={`slide${count++}`}
              className="carousel-item relative w-full min-h-[320px] h-full lg:h-[520px]"
            >
              <div
                className="hero w-full"
                style={{
                  backgroundImage:
                    'url("https://i.ibb.co/87rFXb4/alexandre-pellaes-6v-Ajp0psc-X0-unsplash-1-1.jpg")',
                }}
              >
                <div className="hero-overlay bg-black bg-opacity-50" />
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-4xl font-bold text-white">
                      Dev 3.0
                    </h1>
                    <p className="mb-5 text-white lg:text-lg md:text-base text-xs font-medium">
                      Book us for make your event <br /> or conference
                      successfull.. We will organize <br /> your conference the
                      best posiible way.
                    </p>

                    <div className="mx-auto ml-4  md:ml-14 lg:ml-20">
                      <button className="btn  btn-grad rounded border-none text-white">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a onClick={handleSliderOne} href={`#slide${slide}`} className="btn btn-circle">
                  ❮
                </a>
                <a onClick={handleSliderTwo} href={`#slide${slideTwo}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
        
))}
          </div>
        </div>
    
    </div>
  );
};

export default SingleBanner;
