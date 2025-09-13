
import TestimonialCarousel from "./components/TestimonialCarousel";
import FeatureBlocks from "./components/FeatureBlocks";
import MerchantContactForm from "./components/MerchantContactForm";
import { FaShopify, FaStar, FaUsers, FaShieldAlt } from "react-icons/fa";
import hero from "./assets/hero.png";
import hero2 from "./assets/hero2.png";
import { Link } from "react-router-dom";
import gem from "./assets/gem.png";
import Plans from "./components/Plans";
import shopify from "./assets/shopify.png";
import ProcessFlow from "./components/ProcessFlow";
import FloatingBubbles from "./components/FloatingBubbles";
import WhySubscriptions from "./components/WhySubscriptions";
import ComparisonTable from "./components/ComparisonTable";
import BookConsultation from "./components/BookConsultation";
import Footer from "./components/Footer";
import icon from "./assets/logo.png";
import ProductPage from "./components/ProductPage";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative font-[Montserrat]">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-60 brightness-125"></div>

          {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-black/70 backdrop-blur-sm">
        <Link to="/">
          <div className="text-2xl font-bold flex items-center">
            <img src={icon} width={50} />
            Forge Commerce
          </div>
        </Link>
        <div className="text-md font-thin flex items-center gap-2">
          <div><img src={gem} width={25} /></div>
          <div>Built for</div>
          <div><img src={shopify} width={60} /></div>
        </div>
        <ul className="flex space-x-8 font-medium">
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/pricing" className="hover:text-gray-400">Pricing</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><a href="https://www.linkedin.com/company/108402090" target="_blank" className="hover:text-gray-400">Careers</a></li>
        </ul>
      </nav>
<br/><br/><br/>
      {/* Hero Section */}
      <div className="flex justify-center items-center">
      <section className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-20">
      <h1
  className="text-6xl md:text-6xl font-bold mb-4 text-white
  [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]"
>
  We build Subscriptions  <br/><br/> friendly Shopify Stores
</h1>


<br/>
        <p className="text-lg md:text-2xl text-gray-300 max-w-xl">
        With 10+ years of Shopify experience, we are a team of experts who help launch subscriptions, bundles and other tools to grow your store ✨
        </p><br/><br/>
        <div className="flex gap-8">
        <button
  className="relative text-lg z-10 px-10 py-3 rounded-lg border border-white text-white 
             bg-transparent transition duration-300 
             hover:text-purple-400 hover:border-purple-400 
             hover:shadow-[0_0_25px_rgba(168,85,247,1),0_0_50px_rgba(168,85,247,0.8)]"
><div className="flex justify-center gap-2 cursor-pointer"><div>
 <a href="#contact">Get Started</a> </div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</div>

</button>

<button
  className="relative text-lg z-10 px-10 py-3 rounded-lg border border-white text-white 
             bg-transparent transition duration-300 
             hover:text-purple-400 hover:border-purple-400 
             hover:shadow-[0_0_25px_rgba(168,85,247,1),0_0_50px_rgba(168,85,247,0.8)]"
><a href="#contact"><div className="flex justify-center gap-2 cursor-pointer"><div>
 Book a Demo </div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</div>
</a>

</button>
</div>
      </section>
      <section className="justify-center pb-36">
        <img src={hero} width={450}/>
      </section>
      </div>
           <section>
        <Plans/>
      </section>
      <section>
        <FeatureBlocks/>
      </section>
      <section>
        <WhySubscriptions/>
      </section>
      <section>
        <br/>
        <br/>
        <FloatingBubbles/>
        <br/>
        <br/>
        <br/>
      </section>
           {/* Stats / Trust Section */}
<section className="relative rounded-3xl bg-gradient-to-b from-blue-800 to-purple-500 z-10 grid grid-cols-1 md:grid-cols-4 gap-18 px-12 py-20 max-w-6xl mx-auto">
  <div className="flex flex-col items-center">
    <FaShopify className="text-4xl mb-3 text-green-400" />
    <h3 className="text-3xl font-bold">25+</h3>
    <p className="text-gray-400">Apps Built</p>
  </div>
  <div className="flex flex-col items-center">
    <FaUsers className="text-4xl mb-3 text-blue-400" />
    <h3 className="text-3xl font-bold">50+</h3>
    <p className="text-gray-400">Brands Worked With</p>
  </div>
  <div className="flex flex-col items-center">
    <FaStar className="text-4xl mb-3 text-yellow-400" />
    <h3 className="text-3xl font-bold">4.9/5</h3>
    <p className="text-gray-400">Average Rating</p>
  </div>
  <div className="flex flex-col items-center">
    <FaShieldAlt className="text-4xl mb-3 text-purple-400" />
    <h3 className="text-3xl font-bold">100%</h3>
    <p className="text-gray-400">Secure & Trusted</p>
  </div>
</section>
<br/>
      <section>
<br/><br/>
      <h1  className="text-4xl md:text-4xl text-center font-bold mb-4 text-white
  [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]">
  Build the future of your store
</h1>
<br/>
<div className="flex justify-center gap-10 items-center">
  <div>
<img src={hero2} width={600}/>
</div>
<div>
  <ProcessFlow/>
  <div className="text-center">
  <br/>
  <br/>
  <button
  className="relative text-2xl z-10 px-24 py-3 rounded-lg border border-white cursor-pointer text-white 
             bg-transparent transition duration-300 
             hover:text-purple-400 hover:border-purple-400 
             hover:shadow-[0_0_25px_rgba(168,85,247,1),0_0_50px_rgba(168,85,247,0.8)]"
><Link to="/pricing">
  Quick cost estimate</Link>
</button>
</div>




  </div>
</div>
      </section>
<br/>
<br/>
<section>
  <ComparisonTable/>
</section>
<section>
  <BookConsultation/>
</section>
      <section>
      <TestimonialCarousel />
        </section>
        <section>
        <ProductPage/>
        </section>
        <section id="contact">
<MerchantContactForm/>
        </section>

      {/* Footer */}
     
        <section>
        <Footer/>
      </section>
    </div>
  );
}
