import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import swal from 'sweetalert';



const Details = () => {

    const products = useLoaderData()
    console.log(products)

    const { id } = useParams();
    console.log(id)

    const { name, price, brand, description, rating, category, image } = products

    const handleAddCart = () => {
      fetch('http://localhost:5000/cardInfo', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({name, price, brand, description, rating, category, image }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.insertedId) {
            swal("Success", "Product added successfully", "success");
          }
        })
    }

    

    

    return (
        <div>
<div className="card w-full mx-auto md:w-2/3 my-20 bg-base-100 shadow-xl">
  <figure><img src={image} className="rounded-lg scale-100 hover:scale-110" /></figure>
  <div className="card-body">
  
  <div className="flex items-center justify-between text-black mb-3">
  <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                {name}
              </h5>
  </div>


   
   <h2 className="text-lg font-medium text-gray-800">Brand Name: <span className="text-[#EC6F66] font-bold">{brand}</span></h2>
    <p className="flex items-center text-gray-600 gap-1.5 font-sans text-lg font-semibold leading-relaxed text-blue-gray-900 antialiased">Ratings:
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
               <span className=" font-bold">{rating}</span>
              </p>
              <h2 className=" font-semibold text-gray-600">Price: <span className="font-bold">{price}$</span></h2>
              
   
    <p className="text-gray-500 text-sm md:text-base font-medium">{description}</p>

    <Link to={"/mycart"}>
        <button onClick={handleAddCart} className="btn  rounded-lg w-full my-6 bg-[#EC6F66] text-white border-none capitalize hover:bg-rose-600 "><BsCartCheckFill className="text-lg mb-1"></BsCartCheckFill>Add To Cart</button>
        </Link>

  </div>
</div>

        </div>
    );
};

export default Details;