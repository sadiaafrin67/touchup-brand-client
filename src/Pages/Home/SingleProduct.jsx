import PropTypes from 'prop-types';
import { BsFillPencilFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



const SingleProduct = ({ product }) => {

    const {name, brand, category
, image, price, rating,  _id   } = product
    
    

  return (
    <div >
        
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src={image}
            className="object-cover mx-auto h-full  w-full    rounded-xl border-[#EC6F66] "
          />
        </div>

        <div className="p-6">
          <div className="">
            <div className="flex items-center justify-between text-black mb-3">
              <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                {name}
              </h5>
              <p className="flex items-center gap-1.5 font-sans text-lg font-bold leading-relaxed text-blue-gray-900 antialiased">
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
               {rating}
              </p>
            </div>

            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-lg antialiased font-semibold leading-relaxed text-blue-gray-900">
                Brand Name: <span className="text-[#EC6F66] font-bold">{brand}</span>
              </p>
              <p className="block font-sans text-lg antialiased font-semibold leading-relaxed text-blue-gray-900">
                Price: {price}$
              </p>
            </div>
          </div>

          <p className="block font-sans text-base antialiased font-semibold leading-normal text-gray-700 ">
            Product Type: {category}
          </p>
        </div>
        <div className="p-6 pt-0">

      <div className='flex justify-between items-center '>


      <Link to={`/update/${_id}`}>
      <button className="btn rounded-lg bg-[#EC6F66] text-white border-none capitalize hover:bg-rose-600"><BsFillPencilFill></BsFillPencilFill>update</button>
      </Link>



        <Link to={`/product/${_id}`}>
        <button className="btn rounded-lg bg-[#EC6F66] text-white border-none capitalize hover:bg-rose-600"><BsFillArrowRightCircleFill className='text-lg'></BsFillArrowRightCircleFill>Details</button>
        </Link>


      </div>

          
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.object
};

export default SingleProduct;
