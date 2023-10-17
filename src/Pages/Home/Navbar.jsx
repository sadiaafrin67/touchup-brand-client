import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <li>
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
      </li>
      
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
    <a className="btn btn-grad">Button</a>
  </div>

  </div>
  );
};

export default Navbar;
