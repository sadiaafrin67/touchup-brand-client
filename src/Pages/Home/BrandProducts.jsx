import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import SingleBanner from "./SingleBanner";
import { useEffect, useState } from "react";


const BrandProducts = () => {
    const products = useLoaderData()
    console.log(products.length)

    const {id} =useParams()
    // console.log(id)

    const selectedBrands = products.filter(product => product.brand == id)
    console.log(selectedBrands)

    const [banner, setBanner] = useState([])

    useEffect(() => {
      fetch('/bannerh.json')
        .then((res) => res.json())
        .then((data) => {
          
          setBanner(data)
        })
    }, [])

    const filterBanner = banner.filter(banner => banner.brandName == id)

    return (
        <div>
            <SingleBanner banner={filterBanner}></SingleBanner>

            <div>
             

{
  selectedBrands.length < 1 ?   "" :          <div className="text-center">

  <h2 className="text-xl mt-10 md:text-3xl font-semibold"><span className="text-[#EC6F66] font-bold">{id}'s</span> Available Products</h2>
  <h4 className="text-gray-500 md:text-lg text-sm px-2 mt-2 mb-10 font-medium"><span className="text-[#EC6F66] font-semibold">Touch Up:</span>  Exploring Makeup Marvels and Cosmetic Wonders for Your Signature Style</h4>
  </div> 
}

{/* card div */}
<div className="grid grid-cols-1 md:grid-cols-2 shadow-lg gap-8 mt-6 mb-10">

{
selectedBrands.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
}
</div>

<div className="mx-auto flex justify-center flex-col items-center">
  {
    selectedBrands.length < 1 ? <div className="mx-auto ">
    <img className="h-[80vh] lg:h-[50vh] my-10 w-full  mx-auto" src="https://i.ibb.co/Zmh4DXd/10783811-19197384.jpg"  />
    <p className="text-center mb-16 text-3xl font-bold text-gray-500">This brand product is stockout. <br /> <span>Keep with us follow us to know more.</span></p>
    </div>
: ''  }
</div>
</div>


            


        </div>
    );
};

export default BrandProducts;