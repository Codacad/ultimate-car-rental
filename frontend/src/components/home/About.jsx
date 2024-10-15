import React from "react";
import AboutCarOne from "/images/about-car-1.jpeg";
import AboutCarTwo from "/images/about-car-2.webp";
import { FaCar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { IoIosOpen } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import EasyBooking from "/icons/easy-booking.svg";
import ConvenientPickup from "/icons/convenient-pickup.svg";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const { t } = useTranslation();
  const boxRef = useRef();
  useGSAP(() => {
    // const tl = gsap.timeline();
    // tl.fromTo(
    //   boxRef.current,
    //   { y: 200 }, // Start state
    //   {
    //     y: 0, // End state
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: boxRef.current,
    //       toggleActions: "play none none none",
    //       start: "top 80%", // Start when the box is 80% from the top
    //       end: "top 30%", // End when the box reaches 30% from the top
    //       scrub: true, // Smooth scrubbing
    //     //   markers: true, // Shows markers for debugging, can be removed later
    //     },
    //   }
    // );
    // ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div
        ref={boxRef}
        className="about lg:p-24 grid p-4 lg:grid-cols-2 max-lg:grid-cols-1 gap-4 min-h-screen"
      >
        <div className="images flex relative w-full">
          <div className="img-1 lg:h-[95%] lg:w-[60%] w-full rounded-[140px] absolute">
            <img
              className="h-full border-4 border-[#f65519] w-full rounded-[140px]"
              src={AboutCarOne}
              alt=""
            />
          </div>
          <div className="img-2 rounded-[150px] lg:w-[55%] lg:absolute lg:left-52 -bottom-20">
            <img
              className="rounded-[150px] border-4 border-[#f65519] h-full w-full"
              src={AboutCarTwo}
              alt=""
            />
          </div>
          <div className="img-2"></div>
        </div>
        <div className="text-contents">
          <div className="flex flex-col gap-6">
            <div className="about-subheading flex gap-2 items-center app-primary font-barlow font-bold tracking-wider">
              <FaCar />
              <h3>{t("home_about.subheading")}</h3>
            </div>
            <h1 className="font-caudex text-6xl font-bold leading-[1.1em]">
              {t("home_about.heading")}
            </h1>
            <p className="font-[400] app-navy leading-[1.7em]">
              {t("home_about.text")}
            </p>
            <div className="menus flex flex-col gap-8">
              <div className="easy-book flex gap-4 items-center">
                <span className="icon">
                  <img src={EasyBooking} alt="Easy Booking" />
                </span>
                <div className="text font-barlow">
                  <h2 className="text-2xl font-bold mb-2">
                    {t("home_about.easy_booking.heading")}
                  </h2>
                  <p className="leading-[1.8em]">
                    {t("home_about.easy_booking.text")}
                  </p>
                </div>
              </div>
              <div className="convenient-pickup flex gap-4 items-center">
                <span className="icon">
                  <img src={ConvenientPickup} alt="Convenient Pickup" />
                </span>
                <div className="text font-barlow">
                  <h2 className="text-2xl font-bold mb-2">
                    {t("home_about.pickup.heading")}
                  </h2>
                  <p className="leading-[1.8em]">
                    {t("home_about.pickup.text")}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  className="app-bg-primary flex items-center justify-center gap-2 text-white w-36 p-3 text-center rounded-3xl"
                  to={"/contact"}
                >
                  <span>{t("home_about.contact")}</span>
                  <IoIosOpen />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
