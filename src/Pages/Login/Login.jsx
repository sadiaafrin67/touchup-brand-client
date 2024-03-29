import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash  } from 'react-icons/fa';
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';


const Login = () => {

  const {  SignInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()


  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);


        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    SignInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
       

        

        e.target.reset();

        swal("Signin", "You are successfully signed in", "success");
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        console.log(error);
        swal("Signin failed", "Invalid email or password", "error");
      });
  };



    const [showPass, setShowPass] = useState(false)

    return (
        <div>
        <div className=" my-10 md:my-20  ">
          <div className="hero-content  ">
            <div className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100 ">
              <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40 btn-grad">
                <h3 className="block pt-5 font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                  Login
                </h3>
              </div>
              <form onSubmit={handleLogin}  className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label ">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                   type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  /><span className="absolute top-13 right-4 bottom-12" onClick={() => setShowPass(!showPass)}>{showPass ? <FaEyeSlash /> : <FaEye />}</span>

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-[#EC6F66]">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-grad">Login</button>
                </div>
              </form>
              <p className="text-center py-4 font-medium">
                Don't have an account? Please{" "}
                <Link
                  className="text-[#EC6F66] font-bold underline hover:text-rose-600"
                  to="/register"
                >
                  Register
                </Link>
              </p>
  
              <div className="mx-auto md:flex md:justify-evenly mb-6">
              <p><button onClick={handleGoogleSignIn}  className="btn btn-grad ">Continue With Google</button></p>
  
              <p><button onClick={handleGithubSignIn}  className="btn btn-grad">Continue With Github</button></p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;