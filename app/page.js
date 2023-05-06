import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import "../styles/globals.css";
const Page = () => (
  <div className="bg-primary-black overflow-hidden ">
    <Navbar />
    <Hero />
    <div className="relative">
      <div className="gradient-03 z-0" />
      <About />
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <GetStarted />
      <WhatsNew />
    </div>
    <div className="relative ">
      
      <div className="gradient-03  z-0" />
      <World /> </div>
      <div className="relative ">
      <div className="gradient-04  z-0" />
      <Insights />
   </div>
      <Feedback />
    
    <div className="gradient-03 z-0" />
    <Footer />
  </div>
);

export default Page;
