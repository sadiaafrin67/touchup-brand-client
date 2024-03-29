import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash  } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';





const Register = () => {





  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false)
  const [showPassTwo, setShowPassTwo] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const checkbox = e.target.checkbox.checked;
    console.log(name, email, password, confirmPassword, checkbox);


     if(password !== confirmPassword){
      
      return swal("Signup failed", "Your password did not match", "error");
    }

    else if(password.length < 6){
      
      return swal("Signup failed", "Password must be 6 characters long", "error");
    }

   else if(!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){

      return swal("Signup failed", "Password must contain at least one uppercase letter and one special character", "error");
    }

    else if(!checkbox){
      
      return swal("Signup failed", "You must agree to our terms and conditions", "error");
    }


    createUser(email, password) 
    .then(result => {
      const user = result.user;
      console.log(user);
      e.target.reset()
      
      swal("Signup", "You are successfully signed up", "success");
      navigate('/')
    })
    .catch(error => {
      console.log(error);
    })
  }


  


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
                <form  onSubmit={handleRegister} className="card-body">
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
  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="login" data-ripple-dark="true">
    <input name="checkbox" id="login" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 border-gray-400  before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#EC6F66] checked:bg-[#EC6F66] checked:before:bg-[#EC6F66] hover:before:opacity-10" />
    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  </label>
  <label className="mt-px font-light ml-2 text-gray-700 cursor-pointer select-none" htmlFor="login">
    Accept Our Terms and Conditions
  </label>
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