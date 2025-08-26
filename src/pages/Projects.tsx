import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../assets/logo.png";
import gem from "../assets/gem.png";
import shopify from "../assets/shopify.png";

// Import images from assets
import loopImg from "../assets/loop.png";
import rechargeImg from "../assets/recharge.png";
import boldImg from "../assets/bold.png";
import appstleImg from "../assets/appstle.png";
import recurrpayImg from "../assets/recurrpay.png";
import kachingImg from "../assets/kaching.png";
import gempagesImg from "../assets/gempages.png";
import pageflyImg from "../assets/pagefly.png";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/projects2.png";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import Footer from "../components/Footer";
import BookConsultation from "../components/BookConsultation";
import ProductPage from "../components/ProductPage";
import { Link } from "react-router-dom";

// Carousel images array
const carouselImages = [
  loopImg,
  rechargeImg,
  boldImg,
  appstleImg,
  boldImg,
  recurrpayImg,
  kachingImg,
  gempagesImg,
  pageflyImg,
];

const projectCards = [
  { media: project1, title: "Build Your Own Bundle", desc: "Raw meat brand" },
  { media: project2, title: "Custom Collection Pages", desc: "Candy and snacks brand" },
  { media: project3, title: "Build Your Meal Box", desc: "Weekly Meal Menu brand" },
  { media: project4, title: "Choose your steps", desc: "Beauty and Cosmetics brand" },
  { media: project5, title: "Coffee subscriptions", desc: "Coffee Machine + Coffee brand" },
  { media: project6, title: "Customer Portal", desc: "Health and Supplements brand" },
  { media: project7, title: "Supplements Sale", desc: "Protien flavour Bundle" },
  { media: project8, title: "Custom offers", desc: "Self Care brand" },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-[Montserrat]">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-60 brightness-125"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
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
        <section>
          <ProductPage/>
        </section>

        <section>
          <h1
            className="text-4xl text-center md:text-4xl font-bold mb-4 text-white
              [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]"
          >
            Our work
          </h1>
        </section>

        {/* Project Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-16">
          {projectCards.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-6 rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(project.media)} // open modal
            >
              {project.media.endsWith(".mp4") ? (
                <video
                  src={project.media}
                  controls
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
              ) : (
                <img
                  src={project.media}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Modal for Image Viewer */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            {/* Fullscreen Image */}
            <img
              src={selectedImage}
              alt="Fullscreen project"
              className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        )}

        <section>
          <h1
            className="text-4xl text-center md:text-4xl font-bold mb-4 text-white
              [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]"
          >
            Custom app integrations and optimisation <br />
          </h1>
        </section>

        {/* Carousel */}
        <section className="py-10 px-6">
          <Slider {...settings}>
            {carouselImages.map((src, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} className="flex justify-center">
                <img
                  src={src}
                  alt={`carousel-${idx}`}
                  className="rounded-lg shadow-lg object-contain items-center"
                  style={{ width: "200px"}}
                />
              </motion.div>
            ))}
          </Slider>
        </section>
        <section>
          <BookConsultation/>
        </section>
        <br/>
      </div>
      <Footer/>
    </div>
  );
}
