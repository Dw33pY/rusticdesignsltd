import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-600">Rustic Designs</h1>
        <div className="hidden md:flex gap-6">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-amber-600 transition"
            >
              {l.name}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 shadow-lg space-y-4">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="block cursor-pointer hover:text-amber-600"
              onClick={() => setOpen(false)}
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
