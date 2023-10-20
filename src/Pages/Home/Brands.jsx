import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);


  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div>
      <h2 className="lg:text-3xl md:text-2xl text-xl mt-10 mb-5 text-center font-bold">
        Our <span className="text-[#EC6F66]">Cosmetic & Beauty</span> Brands
      </h2>
      <p className="text-center text-xs lg:text-base font-medium px-2  lg:px-6 mb-10 text-gray-500">Discover Iconic Beauty. Unveiling a Spectacle of Elegance with L'Oréal, Estée Lauder, Chanel, Dior, Revlon, and Avon. <br /> Elevate Your Style with Prestigious Cosmetics from the World's Finest Brands at Your Fingertips.</p>
     
     <div  className="grid grid-cols-1 mb-20 md:grid-cols-2 shadow-md lg:grid-cols-3 gap-4">
        {
          brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
        }
     </div>
    </div>
  );
};

export default Brands;
