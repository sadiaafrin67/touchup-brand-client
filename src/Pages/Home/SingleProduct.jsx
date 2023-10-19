import PropTypes from 'prop-types';

const SingleProduct = ({ product }) => {

    const {name, brand, category
, description, image, price, rating, _id    } = product
    
    

  return (
    <div className="">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src={image}
            className="object-cover mx-auto h-full  w-full    rounded-xl border-[#EC6F66] "
          />
        </div>

        <div className="p-6">
          <div className="">
            <div className="flex items-center justify-between mb-3">
              <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                {name}
              </h5>
              <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </p>
            </div>

            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Apple AirPods
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                $95.00
              </p>
            </div>
          </div>

          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.object
};

export default SingleProduct;
