import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";


const BrandProducts = () => {
    const products = useLoaderData()
    console.log(products)

    const {id} =useParams()
    // console.log(id)

    const selectedBrands = products.filter(product => product.brand == id)
    console.log(selectedBrands)


    return (
        <div>

            <div className="text-center">
                <h2 className="text-xl mt-10 md:text-3xl font-semibold"><span className="text-[#EC6F66] font-bold">{id}'s</span> Available Products</h2>
                <h4 className="text-gray-500 md:text-lg text-sm px-2 mt-4 font-medium"><span className="text-[#EC6F66] font-semibold">Touch Up:</span>  Exploring Makeup Marvels and Cosmetic Wonders for Your Signature Style</h4>
            </div>
            {/* card div */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-6 mb-10">
          {
               selectedBrands.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
           }
          </div>
        </div>
    );
};

export default BrandProducts;