import { useEffect, useState } from "react";
import {
  FaBoxes,
  FaSync,
  FaTasks,
  FaPaintBrush,
  FaEnvelope,
  FaCubes,
  FaSearch,
  FaCode,
  FaPuzzlePiece,
} from "react-icons/fa";

const blocks = [
  { label: "Bundles", icon: <FaBoxes /> },
  { label: "Subscriptions", icon: <FaSync /> },
  { label: "Subscriber Portal", icon: <FaTasks /> },
  { label: "Overall Design", icon: <FaPaintBrush /> },
  { label: "Email Marketing", icon: <FaEnvelope /> },
  { label: "App Integrations", icon: <FaCubes /> },
  { label: "SEO Improvement", icon: <FaSearch /> },
  { label: "Web Development", icon: <FaCode /> },
  { label: "Custom Plugins", icon: <FaPuzzlePiece /> },
];

export default function FeatureBlocks() {
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blocks.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black py-10 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...blocks, ...blocks].map((block, idx) => {
          const isActive = idx % blocks.length === activeIndex;

          return (
            <div
              key={idx}
              className={`inline-flex w-48 h-32 mx-3 rounded-2xl flex-none 
                         items-center justify-center text-white text-xl font-thin 
                         border border-white bg-transparent transition-all duration-500
                         ${isActive ? "bg-purple-500/10 shadow-[0_0_25px_6px_rgba(168,85,247,0.8)]" : ""}`}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl">{block.icon}</span>
                <span>{block.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
