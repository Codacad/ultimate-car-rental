import React from "react";
import AboutCarOne from "/images/about-car-1.jpeg";
import AboutCarTwo from "/images/about-car-2.webp";
import { FaCar } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EasyBooking from "/icons/easy-booking.svg";
import ConvenientPickup from "/icons/convenient-pickup.svg";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
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
      <div ref={boxRef} className="about md:p-24 grid grid-cols-2 gap-4 min-h-screen">
        <div className="images flex relative w-full">
          <div className="img-1 h-[95%] w-[60%] rounded-[140px] absolute">
            <img className="h-full border-4 w-full rounded-[140px]" src={AboutCarOne} alt="" />
          </div>
          <div className="img-2 rounded-[150px] w-[55%] absolute left-52 -bottom-20">
            <img className="rounded-[150px] border-4 h-full w-full" src={AboutCarTwo} alt="" />
          </div>
          <div className="img-2"></div>
        </div>
        <div className="text-contents">
          <div className="flex flex-col gap-6">
            <div className="about-subheading flex gap-2 items-center app-primary font-barlow font-bold tracking-wider">
              <FaCar />
              <h3>About us</h3>
            </div>
            <h1 className="font-caudex text-6xl font-bold leading-[1.1em]">Your trusted partner in reliable car rental</h1>
            <p className="font-[400] app-navy leading-[1.7em]">
              Experience hassle-free car rentals with our trusted service.
              Whether for business or leisure, we offer a wide range of reliable
              vehicles to suit your needs.
            </p>
            <div className="menus flex flex-col gap-8">
              <div className="easy-book flex gap-4 items-center">
                <span className="icon">
                  <img src={EasyBooking} alt="Easy Booking" />
                </span>
                <div className="text font-barlow">
                  <h2 className="text-2xl font-bold mb-2">Easy booking process</h2>
                  <p className="leading-[1.8em]">
                    We Have Optimized The Booking Process So That Our Clients
                    Can Experience The Easiest And The Safest Service
                  </p>
                </div>
              </div>
              <div className="convenient-pickup flex gap-4 items-center">
                <span className="icon">
                  <img src={ConvenientPickup} alt="Convenient Pickup" />
                </span>
                <div className="text font-barlow">
                  <h2 className="text-2xl font-bold mb-2">Convenient pick-up & return process</h2>
                  <p className="leading-[1.8em]">
                    We Have Optimized The Booking Process So That Our Clients
                    Can Experience The Easiest And The Safest Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
