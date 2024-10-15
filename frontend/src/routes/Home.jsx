import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Showcase from "@/components/home/Showcase";

const Home = () => {
  return (
    <>
      <div className="main">
        <Showcase />
        <About />
        <Services />
      </div>
    </>
  );
};

export default Home;
