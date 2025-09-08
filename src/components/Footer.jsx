import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Rustic Designs Ltd</h3>
          <p>
            Bringing elegance and modern aesthetics into timeless interiors. Your dream home starts with us.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-amber-500">About</a></li>
            <li><a href="#services" className="hover:text-amber-500">Services</a></li>
            <li><a href="#portfolio" className="hover:text-amber-500">Portfolio</a></li>
            <li><a href="#gallery" className="hover:text-amber-500">Gallery</a></li>
            <li><a href="#contact" className="hover:text-amber-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Contact</h3>
          <p className="flex items-center gap-2"><Phone size={18}/> +254721388388</p>
          <p className="flex items-center gap-2"><Mail size={18}/> rusticdesigns@gmail.com</p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-amber-500"><Facebook/></a>
            <a href="#" className="hover:text-amber-500"><Instagram/></a>
            <a href="#" className="hover:text-amber-500"><Linkedin/></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Rustic Designs Ltd. All rights reserved.
        <br/> Powered by <span className="text-amber-500 font-semibold">Mboka Digital</span>
      </div>
    </footer>
  );
}
