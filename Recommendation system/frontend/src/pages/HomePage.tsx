import Benefits from "../components/Benefits";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Features from "../components/Feautures";
import About from "../components/About";
import HowItWork from "../components/HowItWork";
import Team from "../components/Team";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div id="home">
        {/* <Slider /> */}
      </div>
      <div id="about">
        <About />
      </div>
      <div id="howitwork">
        <HowItWork />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="team">
        <Team />
      </div>
      
        {/* <Footer /> */}
      
    </>
  );
};

export default HomePage;
