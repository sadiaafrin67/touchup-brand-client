import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash  } from 'react-icons/fa';
import { useState } from "react";


const Register = () => {

    const [showPass, setShowPass] = useState(false)
    const [showPassTwo, setShowPassTwo] = useState(false)


    return (
       
        <div>
        <div>
          <div className="md:my-20 my-10   ">
            <div className="hero-content     ">
              <div className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100 ">
                <div className="relative mx-4 -mt-6  grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40 btn-grad">
                  <h3 className="block pt-5 font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                    Registration
                  </h3>
                </div>
                <form  className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="input input-bordered "
                      required
                    /><span className="absolute top-13 right-4 bottom-4" onClick={() => setShowPass(!showPass)}>{showPass ? <FaEyeSlash /> : <FaEye />}</span>
                    
                  </div>


                  <div className="form-control relative">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type={showPassTwo ? "text" : "password"}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      className="input input-bordered"
                      required
                    /><span className="absolute top-14 right-4 bottom-4 " onClick={() => setShowPassTwo(!showPassTwo)}>{showPassTwo ? <FaEyeSlash /> : <FaEye />} </span>
                    <label className="label">
                      <a href="#" className="label-text-alt text-[#EC6F66] link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
<div className="inline-flex items-center">
  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="checkbox" data-ripple-dark="true">
    <input type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-[#EC6F66] checked:before:bg-pink-500 hover:before:opacity-10 border-gray-400" id="checkbox" defaultChecked />
    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      
    </div>
    
  </label>
  <p className="ml-2 text-sm font-medium text-gray-600"> Accept Our Terms & Conditions</p>
</div>



  
                  <div className="form-control mt-6">
                    <button className="btn btn-grad ">Registration</button>
                  </div>
                </form>
                <p className='text-center py-4 font-medium'>Already have an account? Please <Link className='text-[#EC6F66] font-bold underline hover:text-rose-600' to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    );
};

export default Register;