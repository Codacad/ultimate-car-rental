import { IoIosOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { FaCar } from "react-icons/fa6";
import ShowcaseLogo from '/showcase-logo.gif'
gsap.registerPlugin(useGSAP);
const Showcase = () => {
  const { t } = useTranslation();
  const h3 = useRef();
  const container = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from([".sub-heading", ".text", ".showcase-actions"], {
      y: 50,
      opacity: 0,
      duration: 2,
      stagger: 0.1,
    }).to([".sub-heading", ".text", ".showcase-actions"], {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.1,
    });
    tl.from(
      [".heading"],
      { x: -100, duration: 2, stagger: 0.1, opacity: 0 },
      "0"
    ).to(
      ".heading",
      {
        x: 0,
        stagger: 0.1,
        duration: 2,
        opacity: 1,
      },
      "0"
    );

    // tl.from(".heading", {
    //   y: 50,
    //   // delay:.3,
    //   opacity: 0,
    //   duration: .5,
    //   stagger: 0.3,
    // }).to(".heading", {
    //   y: 0,
    //   opacity: 1,
    //   duration: 1,
    //   stagger: 0.3,
    // });
  });

  return (
    <>
      <div
        ref={container}
        className="showcase min-h-screen md:px-16 font-barlow"
      >
        <div className="w-full relative min-h-screen">
          <div className="image md:rounded-[50px] w-full min-h-screen bg-[url('/images/porsche.webp')] bg-[100%] bg-cover bg-no-repeat"></div>
          <div className="absolute rounded-[50px] w-full min-h-full flex justify-center items-center ml-auto text-center z-10 top-0  bg-[rgba(0,0,0,.5)]">
            <div className="flex justify-center items-center flex-col md:w-[70%]">
              <img src={ShowcaseLogo} alt="" />
              <h3
                ref={h3}
                className="sub-heading flex items-center gap-2 text-white text-xl font-bold rounded-sm p-1"
              >
                <FaCar />
                <span>{t("showcase.subheading")}</span>
              </h3>
              <h1 className="heading tracking-loose md:text-6xl lg:text-7xl text-3xl mt-4 font-bold app-primary">
                {t("showcase.heading")}
              </h1>
              <p className="text text-gray-200 mt-6 md:px-16 px-4 line-height-8">
                {t("showcase.text")}
              </p>
              <div className="showcase-actions actions mt-8 flex gap-4">
                <Link
                  to={"/bookacar"}
                  className="app-bg-primary px-4 py-2 rounded-md text-white flex items-center gap-2"
                >
                  <span>{t("showcase.actions.book")}</span>
                  <FaCar />
                </Link>
                <Link
                  to={"/learnmore"}
                  className="app-bg-light px-4 py-2 rounded-md text-gray-950 flex items-center gap-2"
                >
                  <span>{t("showcase.actions.read-more")}</span>
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

export default Showcase;
