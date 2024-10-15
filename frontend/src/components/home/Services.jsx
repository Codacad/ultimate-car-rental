import React from "react";
import { useTranslation } from "react-i18next";
import IconService1 from "/icons/icon-service-1.svg";
import IconService2 from "/icons/icon-service-2.svg";
import IconService3 from "/icons/icon-service-3.svg";
import IconService4 from "/icons/icon-service-4.svg";
import { MdPageview } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="lg:px-24 lg:mt-16 lg:py-16 p-4 app-bg-wedding font-barlow">
        <div className="headings text-center">
          <h3 className="subheading w-full app-primary mb-4 font-bold flex items-center gap-2 justify-center">
            <FaCar />
            {t("home_services.subheading")}
          </h3>
          <h1 className="md:text-4xl lg:text-5xl text-3xl mx-auto lg:w-[70%] max-md:mb-6 w-full leading-[1.5em] font-bold">
            {t("home_services.heading")}
          </h1>
        </div>
        <div className="services grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:mt-8">
          <div className="service car-rental-with-driver p-4 bg-white rounded-xl">
            <div className="service-content flex flex-col gap-3 py-6">
              <img className="w-24 h-24" src={IconService1} alt="" />
              <h1 className="text-2xl font-bold">Car Rental With Driver</h1>
              <p className="leading-[1.7em] truncate">
                Enjoy a comfortable ride with our professional drivers,
                stress-free service.
              </p>
              <Link
                className="app-bg-primary p-2 flex gap-2 items-center justify-center mt-4 rounded-3xl text-sm text-center text-white w-28"
                to={"#"}
              >
                <span>View More</span>
               
              </Link>
            </div>
          </div>
          <div className="service car-rental-with-driver p-4 bg-white rounded-xl business-car-rental">
            <div className="service-content flex flex-col gap-3 py-6">
              <img className="w-24 h-24" src={IconService2} alt="" />
              <h1 className="text-2xl font-bold">Business Car Rental</h1>
              <p className="leading-[1.7em] truncate">
                Reliable business car rentals tailored for corporate needs and
                efficiency.
              </p>
              <Link
                className="app-bg-primary p-2 mt-4 rounded-3xl text-sm text-center text-white w-24"
                to={"#"}
              >
                View More
              </Link>
            </div>
          </div>
          <div className="service car-rental-with-driver p-4 bg-white rounded-xl airport-transfer">
            <div className="service-content flex flex-col gap-3 py-6">
              <img className="w-24 h-24" src={IconService3} alt="" />
              <h1 className="text-2xl font-bold">Airport Transfer</h1>
              <p className="leading-[1.7em] truncate">
                Efficient and reliable airport transfer services for a
                hassle-free journey.
              </p>
              <Link
                className="app-bg-primary p-2 mt-4 rounded-3xl text-sm text-center text-white w-24"
                to={"#"}
              >
                View More
              </Link>
            </div>
          </div>
          <div className="service car-rental-with-driver p-4 bg-white rounded-xl chauffeur-services">
            <div className="service-content flex flex-col gap-3 py-6">
              <img className="w-24 h-24" src={IconService4} alt="" />
              <h1 className="text-2xl font-bold">Chauffeur Services</h1>
              <p className="leading-[1.7em] truncate">
                Experience luxury travel with our professional, reliable
                chauffeur services today.
              </p>
              <Link
                className="app-bg-primary p-2 mt-4 rounded-3xl text-sm text-center text-white w-24"
                to={"#"}
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
