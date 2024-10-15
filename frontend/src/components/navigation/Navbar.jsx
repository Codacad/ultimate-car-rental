import { Link } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
import { RiMenu5Line } from "react-icons/ri";
import Logo from "/logo2.gif";
import { useTranslation } from "react-i18next";
import { IoLogIn } from "react-icons/io5";
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <>
      <nav className="w-full text-gray-950 md:py-8 lg:px-16 p-4 flex justify-between items-center font-barlow">
        <div className="logo">
          <Link to={"/"} className="logo">
            <img src={Logo} className="w-32" alt="" />
          </Link>
        </div>
        <div className="navitems md:block hidden">
          <ul className="flex lg:gap-8 gap-2 font-bold">
            <li className="flex">
              <Link className="home block p-3" to={"/"}>
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link className="Services block p-3" to={"/services"}>
                {t("navbar.services")}
              </Link>
            </li>
            <li>
              <Link className="cars p-3 flex items-center" to={"/cars"}>
                <span>{t("navbar.cars")}</span>
                {/* <FaCaretDown /> */}
              </Link>
            </li>
            <li>
              <Link className="about block p-3" to={"/about"}>
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link className="contact block p-3" to={"/contact"}>
                {t("navbar.contact")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="actions hidden md:flex gap-4 items-center">
          <Link
            to={"/login"}
            className="login app-light flex items-center gap-1 px-4 py-2 rounded-md app-bg-navy font-semibold hover:underline hover:opacity-80"
          >
            <IoLogIn />
            <span>{t("navbar.login")}</span>
          </Link>
          <Link
            to={"/register"}
            className="register button-hover-primary flex items-center gap-1 app-bg-primary text-white px-4 py-2 rounded-md"
          >
            <IoLockClosed />
            <span>{t("navbar.register")}</span>
          </Link>
          {/* <Link
            to={"/bookacar"}
            className="bookacar app-bg-primary py-2 px-4 flex items-center gap-3 rounded-md text-white"
          >
            <span>Book a Rental Car</span>
            <IoIosOpen />
          </Link> */}
        </div>
        <div className="hamburger md:hidden block">
          <RiMenu5Line className="text-2xl app-primary cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
