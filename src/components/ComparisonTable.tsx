import { CheckCircle, XCircle } from "lucide-react";

export default function ComparisonTable() {
  const negatives = [
    {
      title: "Poor subscription management",
      desc: "Struggle with scaling recurring revenue models",
    },
    {
      title: "No bundle expertise",
      desc: "Limited or no support for product bundles",
    },
    {
      title: "Rigid customer portals",
      desc: "No flexibility for brand-specific experiences",
    },
    {
      title: "Limited app integration",
      desc: "Struggle integrating Shopify subscription apps",
    },
    {
      title: "High costs",
      desc: "Overpriced retainers & hidden fees",
    },
  ];

  const positives = [
    {
      title: "Advanced subscription expertise",
      desc: "10+ years experience building scalable recurring models",
    },
    {
      title: "Custom bundle solutions",
      desc: "Tailored bundle features to increase AOV & retention",
    },
    {
      title: "Customizable customer portals",
      desc: "Branded portals designed around your CX",
    },
    {
      title: "Seamless app integrations",
      desc: "Worked with top Shopify subscription apps",
    },
    {
      title: "Cheaper pricing",
      desc: "Transparent rates, no nickel-and-diming",
    },
  ];

  return (
    <section className="py-16 px-6">
     <h2
  className="text-4xl text-center md:text-4xl font-bold mb-4 text-white
  [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]"
>
        Ready to Grow Faster?
      </h2>
      <br/>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Without Us */}
        <div className="rounded-2xl p-6 bg-transparent border border-white/20 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-6">Other Agencies</h3>
          <div className="space-y-4">
            {negatives.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <XCircle className="text-red-400 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* With Us */}
        <div className="rounded-2xl p-6 bg-transparent border border-purple-400/50 shadow-lg">
          <h3 className="text-xl font-semibold text-purple-300 mb-6">With Us</h3>
          <div className="space-y-4">
            {positives.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-400 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
