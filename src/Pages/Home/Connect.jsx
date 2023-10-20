import { AiFillFacebook } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsLinkedin} from "react-icons/bs";

const Connect = () => {
    return (
<div>

    <div className="md:h-[80vh]  h-[600px] my-10 w-full rounded-lg mt-10" style={{backgroundImage: 'url("https://i.ibb.co/p00TcF2/connect.jpg")'}}>
       <div className="md:h-[65vh] lg:h-[85vh] h-[80vh] flex justify-center items-center flex-col">
       <h2 className="lg:text-3xl md:text-2xl texl-2xl text-black font-extrabold ">Stay Connect With Us</h2>
        <p className="lg:text-xl md:text-base texl-base text-gray-800 my-2 font-semibold text-center ">Only Touch Up Brand provide all brands for your need. <br /> Grab your product and be happy and enjoy</p>
        <h3 className="lg:text-2xl md:text-xl text-xl texl-extrabold text-gray-800 my-2 font-medium">Connect With Us</h3>
        <div className="flex gap-4">
        <button className="btn"><AiFillFacebook className="text-lg"></AiFillFacebook></button>
        <button className="btn"><BiLogoInstagramAlt className="text-lg"></BiLogoInstagramAlt></button>
        <button className="btn"><BsLinkedin className="text-lg"></BsLinkedin></button>
        </div>
        <button className="btn btn-grad">Know More</button>

        

       </div>
    </div>
    



</div>

    );
};

export default Connect;