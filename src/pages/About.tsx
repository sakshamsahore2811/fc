import React from "react";
import {Link} from "react-router-dom"
import gem from "../assets/gem.png";
import shopify from '../assets/shopify.png'
import icon from "../assets/logo.png";
import Footer from "../components/Footer";

// import heroImage from "../assets/team-hero.png"; // replace with your actual hero image

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative font-[Montserrat]">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-60 brightness-125"></div>

           {/* Navbar */}
           <nav className="relative z-10 flex justify-between items-center px-8 py-6 bg-black/70 backdrop-blur-sm">
      <Link to="/"><div className="text-2xl font-bold flex items-center"><img src={icon} width={50}/>Forge Commerce </div></Link>
<div className="text-md font-thin flex items-center gap-2"><div><img src={gem} width={25}/></div><div>Built for</div><div><img src={shopify} width={60}/></div></div>
        <ul className="flex space-x-8 font-medium">
          <li><Link to="/projects"><a className="hover:text-gray-400">Projects</a></Link></li>
          <li><Link to="/pricing"><a className="hover:text-gray-400">Pricing</a></Link></li>
          <li><Link to="/about"><a href="#about" className="hover:text-gray-400">About</a></Link></li>
          <li><a href="https://www.linkedin.com/company/108402090" target="_blank" className="hover:text-gray-400">Careers</a></li>
        </ul>
      </nav>
<br/><br/><br/>
     

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        {/* <img
          src={heroImage}
          alt="Our Team"
          className="w-64 h-64 object-cover rounded-full shadow-lg mb-6 border-4 border-purple-500"
        /> */}
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-3xl leading-relaxed">
          We’re a passionate team of Shopify experts with over a decade of
          experience in building, scaling, and customizing e-commerce
          businesses. Our journey started with helping small merchants
          establish their online presence, and today we’ve successfully built
          and launched over <span className="font-bold">50+ Shopify stores</span>,
          each tailored with unique setups to match the merchant’s exact
          requirements.
          <br />
          <br />
          What sets us apart? Our team includes ex-employees of leading Shopify
          subscription apps who bring insider expertise on subscription
          management, upsells, bundles, and customer portals. We know how
          subscription models work inside out and can help merchants maximize
          retention while providing a seamless customer experience.
          <br />
          <br />
          Beyond subscriptions, we’ve worked extensively on performance
          optimization, custom theme development, headless builds, and app
          integrations. Whether it’s setting up a sleek design, building custom
          flows, or ensuring your store is optimized for conversions—we’ve done
          it all.
          <br />
          <br />
          Our mission is simple: empower merchants with technology and strategy
          so they can focus on what they do best—growing their brand. From
          startups just beginning their journey to established enterprises
          scaling globally, we provide full-spectrum Shopify expertise to help
          you succeed.
          <br />
          <br />
          And we’re just getting started. 🚀
        </p>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
   
  );
};

export default About;
