import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Badge from "../assets/medal.svg"
import Badge2 from "../assets/medal2.svg"


export default function Footer() {
  return (
    <footer className="text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding & Badge */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-8">
            <img src={Badge} width={100}/>
            <img src={Badge2} width={100}/>
          </h2>
          <p className="text-sm">
            Recognized for excellence in Shopify app development & store
            launches. Trusted by merchants worldwide 🚀
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="https://www.linkedin.com/company/forge-commerce/about/" className="hover:text-white">Careers</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/forge-commerce/about/" target="_blank" className="hover:text-blue-400 text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://x.com/forge_commerce" target="_blank"  className="hover:text-gray-400 text-2xl">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-md">📧 forgecommerce@tutamail.com</p>
          <br/>
          <p className="text-md">📞 +91 999775971</p>
          <br/>
          <p className="text-md">🏢 221B Baker Street, London, UK</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="relative z-10 text-center py-8 text-gray-500">
        © {new Date().getFullYear()} Forge Commerce Agency. All rights reserved.
      </div>
    </footer>
  );
}
