import { useState } from "react";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import BookConsultation from "../components/BookConsultation";
import ComparisonTable from "../components/ComparisonTable";
import icon from "../assets/logo.png";
import gem from "../assets/gem.png";
import shopify from "../assets/shopify.png";
import { Link } from "react-router-dom";

type Feature = { id: string; label: string };

const FEATURES: Feature[] = [
  { id: "rebrand", label: "Store rebranding or launch" },
  { id: "subs-design", label: "Subscriptions design" },
  { id: "bundles", label: "Bundles" },
  { id: "portal", label: "Customer Portal" },
  { id: "upsells", label: "Upsells" },
  { id: "subs-setup", label: "Subscriptions App setup optimisation" },
];

export default function Pricing() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [estimate, setEstimate] = useState<number | null>(null);

  const toggle = (id: string) => setSelected(s => ({ ...s, [id]: !s[id] }));
  const calculate = () => {
    const count = Object.values(selected).filter(Boolean).length;
    setEstimate(count * 500);
  };

  // contact form (similar to MerchantContactForm.tsx)
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-black text-white relative font-[Montserrat]">
      {/* Starry Background (same as index.jsx) — now non-interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-60 brightness-125"></div>

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


      {/* Content */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        <section>
          <Plans/>
        </section>
{/*         <h1  className="text-4xl text-center md:text-4xl font-bold mb-4 text-white
  [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]"
>Cost Estimate</h1>

        {/* Feature checkboxes */}
        <div className="space-y-3">
          {FEATURES.map(f => (
            <label
              key={f.id}
              className="flex items-center gap-3 cursor-pointer border border-white/30 p-3 rounded-xl bg-transparent hover:bg-white/5 transition"
            >
              <input
                type="checkbox"
                checked={!!selected[f.id]}
                onChange={() => toggle(f.id)}
                className="w-5 h-5 accent-purple-500 cursor-pointer"
              />
              <span className="select-none">{f.label}</span>
            </label>
          ))}
        </div>

        {/* Calculate */}
        <button
          type="button"
          onClick={calculate}
          className="mt-6 w-full py-3 rounded-lg border border-white text-white transition duration-300
                     hover:text-purple-400 hover:border-purple-400"
        >
          Calculate
        </button>

        {/* Estimate */}
        {estimate !== null && (
          <div className="mt-4 text-center" aria-live="polite">
            <div className="text-2xl font-semibold text-purple-400">
              Estimated Cost: ${estimate} <br/>
              Estimated Timeline : 4-6 weeks
            </div>
          </div>
        )}
 */}
        <section>
          <ComparisonTable/>
        </section>

        {/* Contact form */}
        <section id="contact" className="mt-12">
          <h2  className="text-3xl text-center md:text-3xl font-bold mb-4 text-white
  [text-shadow:0_0_10px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8),0_0_60px_rgba(168,85,247,0.6)]"
>Share your details to get your custom plan</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white
                         focus:outline-none focus:border-purple-400
                         focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white
                         focus:outline-none focus:border-purple-400
                         focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white
                         focus:outline-none focus:border-purple-400
                         focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg border border-white text-white transition duration-300
                         hover:text-purple-400 hover:border-purple-400"
            >
              Get my custom plan
            </button>
          </form>
        </section>
      </main>
      <section>
        <BookConsultation/>
      </section>
      <br/>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
