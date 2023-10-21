import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const Cart = ({ product, setProducts, products }) => {
  const { name, brand, category, image, price, _id } = product;
  console.log(_id)

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://touchup-brand-server.vercel.app/cardInfo/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                console.log(data)
              Swal.fire("Deleted!", "Your product has been deleted.", "success");

              const remaining =products.length && products?.filter((item) => item._id !== _id);
              console.log(remaining)

              setProducts(remaining);
            }
          });
      }
    });
  };




  

  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-full w-full md:h-[320px]" src={image} alt="Shoes" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg text-gray-600 font-medium">
            Brand Name:{" "}
            <span className="text-[#EC6F66] font-bold">{brand}</span>
          </p>

          <p className="text-lg text-gray-600 font-medium">
            Product Type: <span className="font-bold">{category}</span>
          </p>
          <p className="text-lg text-gray-600 font-medium">
            Price: <span className="font-bold">{price}$</span>
          </p>
          <button
            onClick={() => handleDelete(_id)}
            className="btn  w-full mt-8 bg-[#EC6F66] text-white border-none capitalize hover:bg-rose-600 rounded-lg mx-auto"
          >
            Delate From Cart <MdDelete className="text-lg"></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  product: PropTypes.object,
  setItems: PropTypes.func,
  items: PropTypes.array,
  products: PropTypes.array

  
};

export default Cart;
