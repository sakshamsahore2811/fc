import { motion } from "framer-motion";

const keywords = [
  "Subscriptions",
  "Bundles",
  "Customer Portal",
  "Upsells",
  "Sleek Design",
  "Custom Development",
];

export default function FloatingBubbles() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 py-10">
      {keywords.map((word, idx) => (
        <motion.div
          key={idx}
          className="px-6 py-3 rounded-full text-white text-xl font-semibold 
                     shadow-[0_0_20px_rgba(168,85,247,0.8)] border border-purple-400"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3 + idx * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
}
