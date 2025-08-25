import { Calendar } from "lucide-react";

export default function BookConsultation() {
  return (
    <section className="relative rounded-3xl bg-gradient-to-b from-blue-900 to-purple-700 text-center px-8 py-16 max-w-6xl mx-auto shadow-xl">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Book your consultation call
      </h2>

      {/* Sub points */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white/90 mb-10 text-lg">
        <span>Subscription audit of your current setup</span>
        <span className="hidden md:inline text-yellow-400">➤</span>
        <span>Growth opportunity assessment</span>
        <span className="hidden md:inline text-yellow-400">➤</span>
        <span>Competitive benchmarking insights</span>
      </div>

      {/* Button */}
      <div className="mb-6">
        <a
          href="https://calendly.com/forgecommerce-tutamail/30min"
          target="_blank"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <Calendar className="w-6 h-6" />
          Book consultation call
        </a>
      </div>

      {/* Shopify rating */}
      <p className="text-white/80 text-sm">
       Looking forward to seeing you : &#41;
      </p>
    </section>
  );
}
