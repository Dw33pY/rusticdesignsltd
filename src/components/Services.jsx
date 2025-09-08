import { motion } from "framer-motion";
import { Home, Brush, Sofa } from "lucide-react";

const services = [
  { icon: <Home size={40} />, title: "Residential Design", desc: "Elegant and modern home interiors." },
  { icon: <Brush size={40} />, title: "Custom Finishes", desc: "Unique textures and personalized details." },
  { icon: <Sofa size={40} />, title: "Furniture Design", desc: "Tailored furniture that complements your space." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-amber-600 flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
