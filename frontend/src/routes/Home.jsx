import About from "@/components/home/About";
import Showcase from "@/components/home/Showcase";

const Home = () => {
  return (
    <>
      <div className="main">
        <Showcase />
        <About />
      </div>
    </>
  );
};

export default Home;
