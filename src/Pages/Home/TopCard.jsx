import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopCard = ({products}) => {
    const {brandName, brandImage, product, rating,  } = products
    return (
        <div>
<Link >
<div className="card  bg-base-100 shadow-xl">
  <figure><img className='object-cover scale-100 hover:scale-110 w-full md:w-[500px] h-[280px]' src={brandImage}  /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {product}
      <div className="badge "></div>
    </h2>
    <h2 className="card-title text-gray-500 text-base">
      Brand Name: <span className='text-[#EC6F66]'>{brandName}</span>
      <div className="badge "></div>
    </h2>
    <p className="flex text-gray-500 items-center gap-1.5 font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">Rating:
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="-mt-0.5 h-5 w-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
               <span className='text-lg'>{rating}</span>
              </p>
  
   
  </div>
</div> 
</Link>
        </div>
    );
};

TopCard.propTypes = {
    products: PropTypes.object
}

export default TopCard;