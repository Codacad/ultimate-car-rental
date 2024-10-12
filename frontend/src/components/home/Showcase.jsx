import { IoIosOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Showcase = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="showcase min-h-screen md:px-16 p-4">
        <div className="w-full relative min-h-screen">
          <div className="image md:rounded-[50px] rounded-[25px] w-full min-h-screen bg-[url('/images/car2.webp')] bg-[100%] bg-cover bg-no-repeat"></div>
          <div className="absolute rounded-[50px] w-full min-h-full flex flex-col md:px-16 text-center justify-center items-center z-10 top-0 left-0 bg-[rgba(0,0,0,.5)]">
            <h3 className="app-primary font-bold rounded-sm p-1">
              {t("showcase.subheading")}
            </h3>
            <h1 className="md:text-6xl text-3xl mt-4 font-bold text-white line-height-2">
              {t("showcase.heading")}
            </h1>
            <p className="text-gray-200 mt-6 md:px-16 px-4 line-height-4">
              {t("showcase.text")}
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
