import { useState } from "react";
import emailjs from "@emailjs/browser";
import heart from "../assets/heart.png";

export default function MerchantContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    goal: "",
    reference: "",
    themePreference: "",
    scope: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_p8mdmo4", // from EmailJS
        "template_jjogzwh", // from EmailJS
        formData,
        "z-IXwZvX_YmAd0ZM9" // from EmailJS
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
            goal: "",
            reference: "",
            themePreference: "",
            scope: "",
          });
        },
        (err) => {
          console.error(err);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <form
    onSubmit={handleSubmit}
    className="max-w-xl mx-auto bg-transparent backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4"
  >
    <h2 className="text-2xl font-italic text-white mb-2 flex items-center gap-4"><div>Work With Us</div><div><img src={heart} width={40}/></div></h2>
  
    {/* Name */}
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white 
                 focus:outline-none focus:border-purple-400 
                 focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
    />
  
    {/* Email */}
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white 
                 focus:outline-none focus:border-purple-400 
                 focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
    />
  
    {/* Message */}
    <textarea
      name="message"
      placeholder="Tell us about your project..."
      value={formData.message}
      onChange={handleChange}
      rows={4}
      className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white 
                 focus:outline-none focus:border-purple-400 
                 focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
    />
  
    {/* Goal */}
    <select
      name="goal"
      value={formData.goal}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white 
                 focus:outline-none focus:border-purple-400 
                 focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
    >
      <option value="">What’s your goal?</option>
      <option value="Conversion Focus">Conversion Focus</option>
      <option value="Branding">Branding</option>
      <option value="Storytelling">Storytelling</option>
      <option value="Other">Other</option>
    </select>
  
    {/* Reference Sites */}
    <input
      type="text"
      name="reference"
      placeholder="Any reference sites you like?"
      value={formData.reference}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white 
                 focus:outline-none focus:border-purple-400 
                 focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
    />
  
    {/* Theme Preference */}
    <div className="flex gap-4">
    <select
      name="themePreference"
      value={formData.themePreference}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white 
                 focus:outline-none focus:border-purple-400 
                 focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
    >
      <option value="">Theme preference?</option>
      <option value="New Theme">New theme from scratch</option>
      <option value="Modify Existing">Modify existing (e.g. Dawn)</option>
    </select>
  
    {/* Scope */}
    <select
      name="scope"
      value={formData.scope}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-transparent border border-gray-400 text-white 
                 focus:outline-none focus:border-purple-400 
                 focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]"
    >
      <option value="">Project Scope?</option>
      <option value="Homepage">Homepage only</option>
      <option value="Full Store">Full Store (PLP, PDP, Cart, Checkout)</option>
    </select>
    </div>
  
    {/* Submit */}
    <button
      type="submit"
      className="w-full py-3 mt-2 rounded-lg border border-white text-white 
                 hover:text-purple-400 hover:border-purple-400 
                 hover:shadow-[0_0_25px_rgba(168,85,247,1),0_0_50px_rgba(168,85,247,0.8)] 
                 transition duration-300 cursor-pointer"
    >
      Send Message
    </button>
  
    {status && <p className="text-sm text-center text-gray-300">{status}</p>}
  </form>
  
  );
}
