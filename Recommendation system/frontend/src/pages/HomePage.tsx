import Benefits from "../components/Benefits"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Feautures from "../components/Feautures"
import About from "../components/About"
import HowItWork from "../components/HowItWork"
import Team from "../components/Team"
import Footer from "../components/Footer"


const HomePage = () => {
  return (
  <>
    <Navbar />
    <Slider />
    <About />
    <HowItWork />
    <Benefits />
    <Feautures />
    <Team />
    <Footer />
  </>
  )
}

export default HomePage