import React from "react";
import { Link } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
import Logo from "/logo.svg";
import { IoLogIn } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <nav className="w-full py-8 px-16 flex justify-between items-center">
        <div className="logo">
          <Link to={"/"} className="logo">
            <img src={Logo} className="w-32" alt="" />
          </Link>
        </div>
        <div className="navitems">
          <ul className="flex gap-4 font-montserrat">
            <li className="flex">
              <Link className="home block p-3" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="Services block p-3" to={"/services"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="cars p-3 flex items-center" to={"/cars"}>
                <span>Cars</span>
                {/* <FaCaretDown /> */}
              </Link>
            </li>
            <li>
              <Link className="about block p-3" to={"/about"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="contact block p-3" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="actions flex gap-4 items-center">
          <Link to={"/login"} className="login app-light flex items-center gap-1 px-4 py-2 rounded-md app-bg-navy font-semibold hover:underline hover:opacity-80">
            <IoLogIn />
            <span>Login</span>
          </Link>
          <Link
            to={"/register"}
            className="register flex items-center gap-1 app-bg-primary text-white px-4 py-2 rounded-md"
          >
            <IoLockClosed />
            <span>Register</span>
          </Link>
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
