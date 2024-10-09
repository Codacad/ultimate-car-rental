import { IoIosOpen } from "react-icons/io";
import { Link } from "react-router-dom";
const Showcase = () => {
  return (
    <>
      <div className="showcase min-h-screen px-16">
        <div className="w-full relative min-h-screen">
          <div className="image rounded-[50px] w-full min-h-screen bg-[url('/images/car2.webp')] bg-[100%] bg-cover bg-no-repeat"></div>
          <div className="absolute rounded-[50px] w-full min-h-full flex flex-col px-16 text-center justify-center items-center z-10 top-0 left-0 bg-[rgba(0,0,0,.5)]">
            <h3 className="app-primary font-bold bg-white rounded-sm p-1">
              Drive with Confidence in Dubai
            </h3>
            <h1 className="text-6xl mt-4 font-bold text-white line-height-2">
              Experience Affordable Car Rentals Tailored for Every Journey in
              Dubai
            </h1>
            <p className="text-gray-200 mt-6 px-16 line-height-4">
              Discover a wide range of well-maintained cars for rent in Dubai.
              Enjoy a smooth booking experience, excellent service, and vehicles
              suited for every occasion—business, leisure, or adventure.
            </p>
            <div className="showcase-actions mt-8 flex gap-4">
              <Link
                to={"/bookacar"}
                className="app-bg-primary px-4 py-2 rounded-md text-white flex items-center gap-1"
              >
                 <span>Book a Rental Car</span>
                 <IoIosOpen />
              </Link>
              <Link
                to={"/learnmore"}
                className="app-bg-light px-4 py-2 rounded-md text-gray-950"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
