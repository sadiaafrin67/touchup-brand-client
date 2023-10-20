import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import swal from 'sweetalert';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const defaultImg = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";


  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
        swal("Signout", "You are successfully signed out", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EC6F66] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EC6F66] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EC6F66] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EC6F66] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Login
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#EC6F66] underline font-bold text-base  md:hover:btn-neutral px-4 py-2 rounded-lg"
              : ""
          }
        >
          Register
        </NavLink>
      </li> */}
      
    </>
  );

  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start ">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navLinks}
        </ul>
      </div>

      <div className="flex  items-center gap-2">
        <img
          className="w-[50px] h-[50px] "
          src="https://i.ibb.co/tLWRpPZ/touchup-logo-1.jpg"
          alt=""
        />
        <h4 className="font-bold md:text-2xl text-base">
          Touch<span className="text-[#EC6F66]">Up</span>
        </h4>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className=" font-semibold gap-8 menu-horizontal px-1">
        {navLinks}
      </ul>
    </div>

    <div className="navbar-end">
        
        {
         user && (
           <div className="dropdown dropdown-end">
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
               <img src={`${user?.photoURL ? user?.photoURL : defaultImg}`} />
             </div>
           </label>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             <li>
               <a className="justify-between">
                 {user.displayName ? user.displayName : "anonymous"}
                 
               </a>
             </li>
             <li><a>{user.email ? user.email : "anonymous@example.com"}</a></li>
             {console.log("js diye aslm",user.photoURL)}
             <li><Link onClick={handleLogOut}>Logout</Link></li>
           </ul>
         </div>
         )
        }
   
          <div >
          {user ? (
             ''
           ) : (
             <Link to="/login">
               <button className="btn btn-grad ">Login</button>
             </Link>
           )}
          </div>
   
   
         </div>
    

  </div>
  );
};

export default Navbar;
