import { motion } from "framer-motion";
import { TrendingUp, Repeat, Heart, DollarSign } from "lucide-react";

const stats = [
  { icon: <TrendingUp size={32} />, value: "35%", label: "Shoppers prefer recurring orders" },
  { icon: <DollarSign size={32} />, value: "2x", label: "Higher lifetime value (LTV)" },
  { icon: <Heart size={32} />, value: "90%", label: "Better customer retention" },
  { icon: <Repeat size={32} />, value: "Predictable", label: "Revenue & growth" },
];

export default function WhySubscriptions() {
  return (
    <section className="py-16 px-6 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-60 brightness-125"></div>

          <h2
  className="text-4xl md:text-4xl font-bold mb-4 text-white
  [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]"
>
        Why Subscription Model Leads eCommerce
      </h2>
      <p className="text-white max-w-2xl mx-auto mb-12">
        Trusted by leading brands, subscriptions drive loyalty, predictability, 
        and long-term growth. Here’s why it’s the future of eCommerce:
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.4 }}
            className="p-6 rounded-2xl shadow-md hover:shadow-lg"
          >
            <div className="flex justify-center text-purple-600 mb-3">
              {stat.icon}
            </div>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
