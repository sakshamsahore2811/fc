import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Forge Commerce helped us launch our Shopify app in record time. Their expertise is unmatched!",
    name: "Sarah Johnson",
    brand: "Glow Cosmetics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The team built a custom subscription solution that scaled perfectly with our growth.",
    name: "James Carter",
    brand: "Brewly Coffee",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    text: "Seamless experience from start to finish. Their apps are a game-changer for our store.",
    name: "Emily Smith",
    brand: "ZenWear",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { text, name, brand, image } = testimonials[currentIndex];

  return (
    <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center">
      <div className="bg-black/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
        <p className="text-xl md:text-2xl italic mb-6">“{text}”</p>
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full mb-3 border-2 border-white"
          />
          <h4 className="text-lg font-semibold">{name}</h4>
          <span className="text-gray-400 text-sm">{brand}</span>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === idx ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
