import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const Brand = ({ brand }) => {

  const brandNames = useParams();
  console.log("params diye aslm",brandNames);



    // console.log(brand);
    const { brandName, brandImage } = brand;
    


    return (
        <div>
            
        <Link to={`/brand/${brandName}`}>
        <div  className="relative mt-4  flex bg-white flex-col   shadow-md  rounded-xl bg-clip-border">
  <div className="relative mx-4 my-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
  <p className="block font-sans text-center mb-4 text-2xl antialiased font-bold leading-relaxed text-blue-gray-900 text-[#EC6F66]">
       {brandName}
      </p>
    <img src={brandImage} className="object-cover scale-100 hover:scale-110 w-full md:w-[500px] h-[280px] " />
  </div>
  
</div>
        </Link>

   
            
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.object
}

export default Brand;